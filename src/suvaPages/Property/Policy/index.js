import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane, Button } from 'reactstrap';
import classnames from "classnames";
import Flatpickr from "react-flatpickr";
import { gallery } from '../../../common/data';
import Masonry from 'react-masonry-component';

//import images

const Policy = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [policies, setPolicies] = useState([{
    title: "Flexible 18:00 on arrival day",
    description: ""
  }])

  const tabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  document.title = "Profile Settings | Velzon - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <h3 className='d-flex mb-3'>General Property Information</h3>
          <p className='d-flex mb-5'>All your payment, cancellation and policy information is kept here - so you can view, manage and edit everything in one place.</p>
          <div className='d-flex justify-content-between mb-4'>
            <h4 className='d-flex mb-3'>Cancellation and prepayment policies</h4>
            <div className='d-flex flex-column align-items-end'>
              <Button color="danger"> Create new cancellation policy </Button>
              <p>You can create two new cancellation policies</p>
            </div>
          </div>
          <Row>
            <Col>
              <Card className='bg-transparent border-0'>
                
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Policy;