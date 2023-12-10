import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane, Button } from 'reactstrap';
import classnames from "classnames";
import Flatpickr from "react-flatpickr";
import { gallery } from '../../../common/data';
import Masonry from 'react-masonry-component';

//import images

const Ammenities = () => {
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
          <div className='d-flex justify-content-between mb-3'>
            <div>
              <h3 className='d-flex mb-3'>Room Ammenities</h3>
              <p className='d-flex mb-5'>Listing your amenities can really help influence guests to book.</p>
            </div>
            <div>
              <Button color="danger">Save</Button>
            </div>
          </div>
          <Row>
            <Col sm={12}>
              <Card className='bg-transparent border-0'>
                <h4 className='d-flex mb-3'>Bathroom and Toiletries:</h4>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Shower Bathrobe</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Safe Toilet</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Towels Linens</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Slippers</p>
                </div>
                <div className='d-flex align-items-center mb-3'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Heating Hairdryer</p>
                </div>
              </Card>
            </Col>
            <Col sm={12}>
              <Card className='bg-transparent border-0 shadow-none'>
                <h4 className='d-flex mb-3'>In-room Facilities and Entertainment:</h4>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Socket near the bed</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Tile/Marble floor</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>TV</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Telephone</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Ironing facilities</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Satellite channels</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Tea/Coffee maker</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Iron</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Radio</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>iPod dock</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p className='ms-2 mb-0'>Electric kettle</p>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Ammenities;