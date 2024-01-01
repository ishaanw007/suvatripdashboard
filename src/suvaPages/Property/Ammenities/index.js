import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane, Button } from 'reactstrap';
import classnames from "classnames";
import Flatpickr from "react-flatpickr";
import { gallery } from '../../../common/data';
import Masonry from 'react-masonry-component';

import {
  getAmmenities as onGetAmmenities,
  updateAmmenities as onUpdateAmmenities
} from "../../../slices/thunks";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from 'reselect';

//import images

const Ammenities = () => {
  const dispatch = useDispatch();

  const selectLayoutState = (state) => state.Property;
  const propertyAmmenitiesProperties = createSelector(
    selectLayoutState,
    (property) => ({
      ammenities: property.ammenities,
    })
  );

  const {
    ammenities
  } = useSelector(propertyAmmenitiesProperties)

  const loginState = (state) => state.Login;
  const loginProperties = createSelector(
    loginState,
    (login) => ({
      user: login.user,
    })
  );

  const {
    user
  } = useSelector(loginProperties)

  const [ammenitiesData, setAmmenitiesData] = useState();
  const [ammenitiesChecked, setAmmenitiesChecked] = useState([]);
  const [activeTab, setActiveTab] = useState("1");
  const [policies, setPolicies] = useState([{
    title: "Flexible 18:00 on arrival day",
    description: ""
  }])

  const tabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    console.log(user, 'uuuuuu');
    dispatch(onGetAmmenities());
  }, [])

  useEffect(() => {
    if (ammenities) {
      console.log(ammenities);
      setAmmenitiesData(ammenities);
      const mergedArray = [].concat(...Object.values(ammenities));
      setAmmenitiesChecked(mergedArray)
    }
  }, [ammenities])

  const getCheckboxStatus = (facility) => {
    return ammenitiesChecked.length > 0 ? ammenitiesChecked.some((category) => category.includes(facility)) : false
  };

  const handleChange = (e, facility) => {
    const { name, checked } = e.target;

    setAmmenitiesChecked((prevChecked) => {
      if (checked) {
        return [...prevChecked, name];
      } else {
        return prevChecked.filter((item) => item !== name);
      }
    });

    setAmmenitiesData((prevData) => {
      if (checked) {
        return {
          ...prevData,
          [facility]: [...prevData[facility], name],
        };
      } else {
        return {
          ...prevData,
          [facility]: prevData[facility].filter((item) => item !== name),
        };
      }
    });
  };

  const handleSubmit = () => {
    dispatch(onUpdateAmmenities({id: localStorage.getItem('hotel_id'), data: {ammenities: ammenitiesData}}));
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
              <Button onClick={handleSubmit} color="danger">Save</Button>
            </div>
          </div>
          <Row>
            <Col sm={12}>
              <Card className='bg-transparent border-0'>
                <h4 className='d-flex mb-3'>Bathroom and Toiletries:</h4>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="Shower Bathrobe" name="Shower Bathrobe" onChange={(e) => handleChange(e, 'bathroom')} checked={getCheckboxStatus("Shower Bathrobe")} value="Shower Bathrobe" />
                  <p className='ms-2 mb-0'>Shower Bathrobe</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="Safe Toilet" name="Safe Toilet" onChange={(e) => handleChange(e, 'bathroom')} checked={getCheckboxStatus("Safe Toilet")} value="Safe Toilet" />
                  <p className='ms-2 mb-0'>Safe Toilet</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="Towels Linens" name="Towels Linens" onChange={(e) => handleChange(e, 'bathroom')} checked={getCheckboxStatus("Towels Linens")} value="Towels Linens" />
                  <p className='ms-2 mb-0'>Towels Linens</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="Slippers" name="Slippers" onChange={(e) => handleChange(e, 'bathroom')} checked={getCheckboxStatus("Slippers")} value="Slippers" />
                  <p className='ms-2 mb-0'>Slippers</p>
                </div>
                <div className='d-flex align-items-center mb-3'>
                  <input type="checkbox" id="Heating Hairdryer" name="Heating Hairdryer" onChange={(e) => handleChange(e, 'bathroom')} checked={getCheckboxStatus("Heating Hairdryer")} value="Heating Hairdryer" />
                  <p className='ms-2 mb-0'>Heating Hairdryer</p>
                </div>
              </Card>
            </Col>
            <Col sm={12}>
              <Card className='bg-transparent border-0 shadow-none'>
                <h4 className='d-flex mb-3'>In-room Facilities and Entertainment:</h4>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="Socket near the bed" name="Socket near the bed" onChange={(e) => handleChange(e, 'inRoom')} checked={getCheckboxStatus("Socket near the bed")} value="Socket near the bed" />
                  <p className='ms-2 mb-0'>Socket near the bed</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="Tile/Marble floor" name="Tile/Marble floor" onChange={(e) => handleChange(e, 'inRoom')} checked={getCheckboxStatus("Tile/Marble floor")} value="Tile/Marble floor" />
                  <p className='ms-2 mb-0'>Tile/Marble floor</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="TV" name="TV" value="TV" />
                  <p className='ms-2 mb-0'>TV</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="Telephone" name="Telephone" onChange={(e) => handleChange(e, 'inRoom')} checked={getCheckboxStatus("Telephone")} value="Telephone" />
                  <p className='ms-2 mb-0'>Telephone</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="Ironing facilities" name="Ironing facilities" onChange={(e) => handleChange(e, 'inRoom')} checked={getCheckboxStatus("Ironing facilities")} value="Ironing facilities" />
                  <p className='ms-2 mb-0'>Ironing facilities</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="Satellite channels" name="Satellite channels" onChange={(e) => handleChange(e, 'inRoom')} checked={getCheckboxStatus("Satellite channels")} value="Satellite channels" />
                  <p className='ms-2 mb-0'>Satellite channels</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="Tea/Coffee maker" name="Tea/Coffee maker" onChange={(e) => handleChange(e, 'inRoom')} checked={getCheckboxStatus("Tea/Coffee maker")} value="Tea/Coffee maker" />
                  <p className='ms-2 mb-0'>Tea/Coffee maker</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="Iron" name="Iron" onChange={(e) => handleChange(e, 'inRoom')} checked={getCheckboxStatus("Iron")} value="Iron" />
                  <p className='ms-2 mb-0'>Iron</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="Radio" name="Radio" onChange={(e) => handleChange(e, 'inRoom')} checked={getCheckboxStatus("Radio")} value="Radio" />
                  <p className='ms-2 mb-0'>Radio</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="iPod dock" name="iPod dock" onChange={(e) => handleChange(e, 'inRoom')} checked={getCheckboxStatus("iPod dock")} value="iPod dock" />
                  <p className='ms-2 mb-0'>iPod dock</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="Electric kettle" name="Electric kettle" onChange={(e) => handleChange(e, 'inRoom')} checked={getCheckboxStatus("Electric kettle")} value="Electric kettle" />
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