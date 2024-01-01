import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'reactstrap';
import {
  getInfo as onGetInfo,
} from "../../../slices/thunks";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from 'reselect';

const GeneralInfo = () => {
  const dispatch = useDispatch();

  const selectLayoutState = (state) => state.Property;
  const propertyInfoProperties = createSelector(
    selectLayoutState,
    (property) => ({
      info: property.info,
    })
  );

  const {
    info
  } = useSelector(propertyInfoProperties)

  const [activeTab, setActiveTab] = useState("1");
  const [data, setData] = useState()

  useEffect(() => {
    dispatch(onGetInfo());
  }, [])

  useEffect(() => {
    if(info) {
      setData(info);
    }
  }, [info])

  document.title = "Profile Settings | Velzon - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <h3 className='d-flex mb-5'>General Property Information</h3>
          {data && <Row>
            <Col sm={12}>
              {data ? <Card className='bg-transparent border-0 shadow-none'>
                <div className='mb-3'>
                  <h6 className='d-flex text-muted'>Property name:</h6>
                  <h6>{data.propertyName ? data.propertyName  : ''}</h6>
                </div>
                <div className='mb-3'>
                  <h6 className='d-flex text-muted'>Property address:</h6>
                  <h6>{data.address ? data.address : ''}, {data.city ? data.city : ''}, {data.country ? data.country : ''}</h6>
                </div>
                <div className='mb-3'>
                  <h6 className='d-flex text-muted'>Property location:</h6>
                  <h6>{data.latitude ? data.latitude : ''}, {data.longitude ? data.longitude : ''}, (on google maps)</h6>
                </div>
                {/* <div className='mb-3'>
                  <h6 className='d-flex text-muted'>Property Status:</h6>
                  <h6>Open / Bookable</h6>
                </div> */}
              </Card> : <Card className='bg-transparent border-0 shadow-none'>
                <div>
                  <h6>No hotel registered</h6>
                </div>
              </Card>}
            </Col>
          </Row>}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default GeneralInfo;