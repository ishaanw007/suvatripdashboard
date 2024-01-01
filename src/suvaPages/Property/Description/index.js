import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCallback } from 'react';
import { Card, Modal, ModalBody, ModalHeader, ModalFooter, CardBody, CardHeader, Col, Container, Form, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane, Button } from 'reactstrap';
import classnames from "classnames";
import Flatpickr from "react-flatpickr";
import { gallery } from '../../../common/data';
import Masonry from 'react-masonry-component';
import {
  getDescription as onGetDescription,
  updateDescription as onUpdateDescription
} from "../../../slices/thunks";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from 'reselect';
import { useFormik } from 'formik';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import * as Yup from "yup";
//import images

const Description = () => {
  const dispatch = useDispatch();

  const selectLayoutState = (state) => state.Property;
  const propertyDescriptionProperties = createSelector(
    selectLayoutState,
    (property) => ({
      description: property.description,
    })
  );

  const {
    description
  } = useSelector(propertyDescriptionProperties)

  const [editModal, setEditModal] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
  const [policies, setPolicies] = useState([{
    title: "Flexible 18:00 on arrival day",
    description: ""
  }])
  const [descriptionData, setDescriptionData] = useState('')

  const tabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    dispatch(onGetDescription(localStorage.getItem('hotel_id')));
  }, [])

  useEffect(() => {
    if (description) {
      setDescriptionData(description);
    }
  }, [dispatch, description])

  const handleSubmit = (e) => {
    dispatch(onUpdateDescription({id: localStorage.getItem('hotel_id'), data: {description: descriptionData}}));
    setEditModal(false)
  }

  const toggle = useCallback(() => {
    if (editModal) {
      setEditModal(false);
    } else {
      setEditModal(true);
    }
  }, [editModal]);

  document.title = "Profile Settings | Velzon - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <Modal id="showModal" isOpen={editModal} toggle={toggle} centered>
        <ModalHeader className="bg-light p-3" toggle={toggle}>
          {"Edit Description"}
        </ModalHeader>
        <Form className="tablelist-form" onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
          return false;
        }}>
          <ModalBody>
            {/* Guests */}
            <div className="mb-3">
              <Label htmlFor="description-field" className="form-label">
                Description
              </Label>
              <CKEditor
                editor={ClassicEditor}
                data={descriptionData}
                onChange={(e, editor) => {
                  let data = editor.getData();
                  setDescriptionData(data)
                }}
              />
              {descriptionData === '' ? (
                <div className="invalid-feedback" style={{display: 'block'}}>Please Enter Description</div>
              ) : null}
            </div>
          </ModalBody>
          <ModalFooter>
            <div className="hstack gap-2 justify-content-end">
              <button type="button" className="btn btn-light" onClick={() => { setEditModal(false); }}> Close </button>

              <button type="submit" className="btn btn-success"> {"Update"} </button>
            </div>
          </ModalFooter>
        </Form>
      </Modal>
      <div className="page-content">
        <Container fluid>
          <div className='d-flex justify-content-between'>
            <div>
              <h3 className='d-flex mb-3'>Property Description</h3>
              <p className='d-flex mb-5'>This is where you can view your property or room descriptions</p>
            </div>
          </div>
          <Row>
            <Col sm={12}>
              <h4 className='d-flex mb-4'>Property description</h4>
              <Card className='bg-transparent border p-3'>
                <div className='d-flex justify-content-between mb-3'>
                  <h5 className='d-flex mb-0'>Property description</h5>
                  <Button onClick={toggle} color="danger">Edit</Button>
                </div>
                {description!=='' && <p dangerouslySetInnerHTML={{ __html: description }}>
                </p>}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Description;