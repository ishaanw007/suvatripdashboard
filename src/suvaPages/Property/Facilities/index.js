import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane, Button } from 'reactstrap';
import classnames from "classnames";
import Flatpickr from "react-flatpickr";
import { gallery } from '../../../common/data';
import Masonry from 'react-masonry-component';

//import images

const Facilities = () => {
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
          <div className='d-flex justify-content-between'>
            <div>
              <h3 className='d-flex mb-3'>Facilities and services</h3>
              <p className='d-flex mb-5'>Listing your facilities can really help influence guests to book.</p>
            </div>
            <div>
              <Button color="danger">Save</Button>
            </div>
          </div>
          <Row>
            <Col sm={12}>
              <Card className='bg-transparent border-bottom shadow-none'>
                <h4 className='d-flex mb-3'>Accomodation and Services:</h4>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Free parking</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Key card access</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Daily housekeeping</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Non-smoking rooms</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Lift</p>
                </div>
                <div className='d-flex align-items-center mb-3'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Room Service</p>
                </div>
              </Card>
            </Col>
            <Col sm={12}>
              <Card className='bg-transparent border-bottom shadow-none'>
                <h4 className='d-flex mb-3'>Leisure & Recreation:</h4>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Garden</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Indoor swimming pool</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Outdoor swimming pool</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Fitness Center</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Spa</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Beach</p>
                </div>
              </Card>
            </Col>
            <Col sm={12}>
              <Card className='bg-transparent border-0 shadow-none'>
                <h4 className='d-flex mb-3'>Connectivity & Amenities:</h4>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Free Wifi</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Air conditioning</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Private Bathroom</p>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Facilities;