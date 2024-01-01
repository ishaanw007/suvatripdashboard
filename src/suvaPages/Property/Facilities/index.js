import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane, Button } from 'reactstrap';
import classnames from "classnames";
import Flatpickr from "react-flatpickr";
import { gallery } from '../../../common/data';
import Masonry from 'react-masonry-component';

import {
  getFacilities as onGetFacilities,
  updateFacilities as onUpdateFacilities
} from "../../../slices/thunks";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from 'reselect';

//import images

const Facilities = () => {
  const dispatch = useDispatch();

  const selectLayoutState = (state) => state.Property;
  const propertyFacilitiesProperties = createSelector(
    selectLayoutState,
    (property) => ({
      facilities: property.facilities,
    })
  );

  const {
    facilities
  } = useSelector(propertyFacilitiesProperties)

  const [facilitiesData, setFacilitiesData] = useState();
  const [facilitiesChecked, setFacilitiesChecked] = useState([]);
  const [activeTab, setActiveTab] = useState("1");
  const [policies, setPolicies] = useState([{
    title: "Flexible 18:00 on arrival day",
    description: ""
  }])

  const tabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    dispatch(onGetFacilities());
  }, [])

  useEffect(() => {
    if (facilities) {
      setFacilitiesData(facilities);
      const mergedArray = [].concat(...Object.values(facilities));
      setFacilitiesChecked(mergedArray)
    }
  }, [facilities])

  const getCheckboxStatus = (facility) => {
    return facilitiesChecked.length > 0 ? facilitiesChecked.some((category) => category.includes(facility)) : false
  };

  const handleChange = (e, facility) => {
    const { name, checked } = e.target;

    setFacilitiesChecked((prevChecked) => {
      if (checked) {
        return [...prevChecked, name];
      } else {
        return prevChecked.filter((item) => item !== name);
      }
    });

    setFacilitiesData((prevData) => {
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
    dispatch(onUpdateFacilities({id: localStorage.getItem('hotel_id'), data: {facilities: facilitiesData}}));
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
              <Button onClick={handleSubmit} color="danger">Save</Button>
            </div>
          </div>
          <Row>
            <Col sm={12}>
              <Card className='bg-transparent border-bottom shadow-none'>
                <h4 className='d-flex mb-3'>Accomodation and Services:</h4>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="Free parking" name="Free parking" onChange={(e) => handleChange(e, 'accommodation')} checked={getCheckboxStatus("Free parking")} value="Free parking" />
                  <p className='ms-2 mb-0'>Free parking</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="Key card access" name="Key card access" onChange={(e) => handleChange(e, 'accommodation')} checked={getCheckboxStatus("Key card access")} value="Key card access" />
                  <p className='ms-2 mb-0'>Key card access</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="Daily housekeeping" name="Daily housekeeping" onChange={(e) => handleChange(e, 'accommodation')} checked={getCheckboxStatus("Daily housekeeping")} value="Daily housekeeping" />
                  <p className='ms-2 mb-0'>Daily housekeeping</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="Non-smoking rooms" name="Non-smoking rooms" onChange={(e) => handleChange(e, 'accommodation')} checked={getCheckboxStatus("Non-smoking rooms")} value="Non-smoking rooms" />
                  <p className='ms-2 mb-0'>Non-smoking rooms</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="Lift" name="Lift" onChange={(e) => handleChange(e, 'accommodation')} checked={getCheckboxStatus("Lift")} value="Lift" />
                  <p className='ms-2 mb-0'>Lift</p>
                </div>
                <div className='d-flex align-items-center mb-3'>
                  <input type="checkbox" id="Room Service" name="Room Service" onChange={(e) => handleChange(e, 'accommodation')} checked={getCheckboxStatus("Room Service")} value="Room Service" />
                  <p className='ms-2 mb-0'>Room Service</p>
                </div>
              </Card>
            </Col>
            <Col sm={12}>
              <Card className='bg-transparent border-bottom shadow-none'>
                <h4 className='d-flex mb-3'>Leisure & Recreation:</h4>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="Gardens" name="Gardens" onChange={(e) => handleChange(e, 'recreation')} checked={getCheckboxStatus("Gardens")} value="Gardens" />
                  <p className='ms-2 mb-0'>Gardens</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="Indoor swimming pool" name="Indoor swimming pool" onChange={(e) => handleChange(e, 'recreation')} checked={getCheckboxStatus("Indoor swimming pool")} value="Indoor swimming pool" />
                  <p className='ms-2 mb-0'>Indoor swimming pool</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="Outdoor swimming pool" name="Outdoor swimming pool" onChange={(e) => handleChange(e, 'recreation')} checked={getCheckboxStatus("Outdoor swimming pool")} value="Outdoor swimming pool" />
                  <p className='ms-2 mb-0'>Outdoor swimming pool</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="Fitness Center" name="Fitness Center" onChange={(e) => handleChange(e, 'recreation')} checked={getCheckboxStatus("Fitness Center")} value="Fitness Center" />
                  <p className='ms-2 mb-0'>Fitness Center</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="Spa" name="Spa" onChange={(e) => handleChange(e, 'recreation')} checked={getCheckboxStatus("Spa")} value="Spa" />
                  <p className='ms-2 mb-0'>Spa</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="Beach" name="Beach" onChange={(e) => handleChange(e, 'recreation')} checked={getCheckboxStatus("Beach")} value="Beach" />
                  <p className='ms-2 mb-0'>Beach</p>
                </div>
              </Card>
            </Col>
            <Col sm={12}>
              <Card className='bg-transparent border-0 shadow-none'>
                <h4 className='d-flex mb-3'>Connectivity & Amenities:</h4>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="Free Wifi" name="Free Wifi" onChange={(e) => handleChange(e, 'connectivity')} checked={getCheckboxStatus("Free Wifi")} value="Free Wifi" />
                  <p className='ms-2 mb-0'>Free Wifi</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="Air conditioning" name="Air conditioning" onChange={(e) => handleChange(e, 'connectivity')} checked={getCheckboxStatus("Air conditioning")} value="Air conditioning" />
                  <p className='ms-2 mb-0'>Air conditioning</p>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <input type="checkbox" id="Private Bathroom" name="Private Bathroom" onChange={(e) => handleChange(e, 'connectivity')} checked={getCheckboxStatus("Private Bathroom")} value="Private Bathroom" />
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