import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane, Button } from 'reactstrap';
import classnames from "classnames";
import Flatpickr from "react-flatpickr";
import { gallery } from '../../../common/data';
import Masonry from 'react-masonry-component';

//import images

const Description = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [policies, setPolicies] = useState([{
    title: "Flexible 18:00 on arrival day",
    description: ""
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
                  <Button color="danger">Edit</Button>
                </div>
                <p>
                  {description}
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Description;