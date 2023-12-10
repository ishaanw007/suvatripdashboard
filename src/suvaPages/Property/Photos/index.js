import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane, Button } from 'reactstrap';
import classnames from "classnames";
import Flatpickr from "react-flatpickr";
import { gallery } from '../../../common/data';
import Masonry from 'react-masonry-component';

//import images
import progileBg from '../../../assets/images/profile-bg.jpg';
import avatar1 from '../../../assets/images/users/avatar-1.jpg';

const Photos = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [displayCategory, setCategory] = useState("All");
  const [index, setIndex] = useState(-1);

  const filterGallery = ({ category }) => {
    return (
      (displayCategory === category || displayCategory === "All")
    );
  };

  const filteredGallery = gallery.filter(({ category }) => filterGallery({ category }));

  const tabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  document.title = "Profile Settings | Velzon - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <h3 className='d-flex mb-3'>Photos</h3>
          <Row>
            <Col>
              <Card className='bg-transparent border-0 shadow-none'>
                <CardHeader bg-transparent>
                  <Nav className="nav-tabs-custom rounded card-header-tabs border-bottom-0"
                    role="tablist">
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === "1" })}
                        onClick={() => {
                          tabChange("1");
                        }}>
                        <i className="fas fa-home"></i>
                        All Photos
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#"
                        className={classnames({ active: activeTab === "2" })}
                        onClick={() => {
                          tabChange("2");
                        }}
                        type="button">
                        <i className="far fa-user"></i>
                        Units With Missing Photos
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody className="p-4">
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                      <h4 className='d-flex mb-3'>Main Gallery (5 Photos)</h4>
                      <div className='d-flex justify-content-between mb-4'>
                        <Button color="danger"> Add Photos </Button>
                        <div className='d-flex'>
                          <Button color="primary" outline className="btn btn-ghost-primary">Discard All</Button>
                          <Button color="primary" outline className="btn btn-ghost-primary ms-2">Hide From Gallery</Button>
                          <Button color="primary" outline className="btn btn-ghost-primary ms-2">Delete</Button>
                        </div>
                      </div>
                      <Masonry className="row gallery-wrapper">
                        {filteredGallery.map(({ img, title, id, auther, likes, comments }, key) => (
                          <Col xxl={3} xl={3} sm={6} className="element-item project designing development" key={key}>
                            <Card className="gallery-box">
                              <div className="gallery-container">
                                <Link className="image-popup" to="#" title={title} onClick={() => setIndex(key)}>
                                  <img className="gallery-img img-fluid mx-auto" src={img} alt="" />
                                  <div className="gallery-overlay d-flex flex-column justify-content-between align-items-start">
                                    <input type="radio" id={`radio-${id}`} name={`radio-${id}`} value={`radio-${id}`} />
                                    <h5 className="overlay-caption">{title}</h5>
                                  </div>
                                </Link>
                              </div>
                            </Card>
                          </Col>
                        ))}
                      </Masonry>
                    </TabPane>
                    <TabPane tabId="2">
                      <h4 className='d-flex mb-3'>Main Gallery (5 Photos)</h4>
                      <div className='d-flex justify-content-between mb-4'>
                        <Button color="danger"> Add Photos </Button>
                        <div className='d-flex'>
                          <Button color="primary" outline className="btn btn-ghost-primary">Discard All</Button>
                          <Button color="primary" outline className="btn btn-ghost-primary ms-2">Hide From Gallery</Button>
                          <Button color="primary" outline className="btn btn-ghost-primary ms-2">Delete</Button>
                        </div>
                      </div>
                      <Masonry className="row gallery-wrapper">
                        {filteredGallery.map(({ img, title, id, auther, likes, comments }, key) => (
                          <Col xxl={3} xl={3} sm={6} className="element-item project designing development" key={key}>
                            <Card className="gallery-box">
                              <div className="gallery-container">
                                <Link className="image-popup" to="#" title={title} onClick={() => setIndex(key)}>
                                  <img className="gallery-img img-fluid mx-auto" src={img} alt="" />
                                  <div className="gallery-overlay d-flex flex-column justify-content-between align-items-start">
                                    <input type="radio" id={`radio-${id}`} name={`radio-${id}`} value={`radio-${id}`} />
                                    <h5 className="overlay-caption">{title}</h5>
                                  </div>
                                </Link>
                              </div>
                            </Card>
                          </Col>
                        ))}
                      </Masonry>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Photos;