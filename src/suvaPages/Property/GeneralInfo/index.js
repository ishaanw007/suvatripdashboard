import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane, Button } from 'reactstrap';
import classnames from "classnames";
import Flatpickr from "react-flatpickr";
import { gallery } from '../../../common/data';
import Masonry from 'react-masonry-component';

//import images

const GeneralInfo = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [data, setData] = useState([{
    name: "Hotel Name",
    address: "Lorem ipsum is simply dummy text",
    location: "12.123.123.443, (on google maps)",
    status: "Open / Bookable"
  }])
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in rep. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.')

  const tabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  document.title = "Profile Settings | Velzon - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <h3 className='d-flex mb-5'>General Property Information</h3>
          <Row>
            <Col sm={12}>
              <Card className='bg-transparent border-0 shadow-none'>
                <div className='mb-3'>
                  <h6 className='d-flex text-muted'>Property name:</h6>
                  <h6>Hotel Name</h6>
                </div>
                <div className='mb-3'>
                  <h6 className='d-flex text-muted'>Property address:</h6>
                  <h6>Lorem ipsum is simply dummy text</h6>
                </div>
                <div className='mb-3'>
                  <h6 className='d-flex text-muted'>Property location:</h6>
                  <h6>12.123.123.443, (on google maps)</h6>
                </div>
                <div className='mb-3'>
                  <h6 className='d-flex text-muted'>Property Status:</h6>
                  <h6>Open / Bookable</h6>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default GeneralInfo;