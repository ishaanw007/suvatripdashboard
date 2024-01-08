import React, {useEffect} from 'react';
import { Col, Container, Row } from 'reactstrap';

//import Components
import UsersByDevice from './UsersByDevice';
import Widget from './Widget';
import TopPages from './TopPages';
import ReservationStatistics from './ReservationStatistics';
import Rooms from './Rooms';
import {Button} from 'reactstrap';

const DashboardAnalytics = () => {
    
    document.title = "Analytics | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className='w-100 d-flex align-items-center justify-content-between mb-4'>
                        <h3 className='d-flex'>Dashboard</h3>
                        <Button color="danger"> Add new property </Button>
                    </div>
                    <Row>
                        <Col md={12}>
                            <Widget />
                        </Col>
                    </Row>
                    <Row>
                        <ReservationStatistics />
                        <UsersByDevice />
                    </Row>
                    <Row>
                        <TopPages />
                        <Rooms />
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default DashboardAnalytics;