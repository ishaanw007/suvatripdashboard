import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import CountUp from "react-countup";

//Import Icons
import FeatherIcon from "feather-icons-react";

const Widget = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={3}>
                    <Card className="card-animate">
                        <CardBody>
                            <div >
                                <div>
                                    <div>
                                        <div className="avatar-sm flex-shrink-0 mb-3">
                                            <span className="avatar-title bg-info-subtle rounded-circle fs-2">
                                                <FeatherIcon
                                                    icon="users"
                                                    className="text-info"
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <p className="fw-medium text-muted mb-0">Today's Check In rooms</p>
                                    <h2 className="mt-2 ff-secondary fw-semibold">
                                        <span className="counter-value">
                                            <CountUp
                                                start={0}
                                                end={28}
                                                decimals={1}
                                                duration={4}
                                            />
                                            0</span>k</h2>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card className="card-animate">
                        <CardBody>
                            <div >
                                <div>
                                    <div>
                                        <div className="avatar-sm flex-shrink-0 mb-3">
                                            <span className="avatar-title bg-info-subtle rounded-circle fs-2">
                                                <FeatherIcon
                                                    icon="users"
                                                    className="text-info"
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <p className="fw-medium text-muted mb-0">Today's Check Out rooms</p>
                                    <h2 className="mt-2 ff-secondary fw-semibold">
                                        <span className="counter-value">
                                            <CountUp
                                                start={0}
                                                end={28}
                                                decimals={1}
                                                duration={4}
                                            />
                                            0</span>k</h2>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card className="card-animate">
                        <CardBody>
                            <div >
                                <div>
                                    <div>
                                        <div className="avatar-sm flex-shrink-0 mb-3">
                                            <span className="avatar-title bg-info-subtle rounded-circle fs-2">
                                                <FeatherIcon
                                                    icon="users"
                                                    className="text-info"
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <p className="fw-medium text-muted mb-0">Rooms Available</p>
                                    <h2 className="mt-2 ff-secondary fw-semibold">
                                        <span className="counter-value">
                                            <CountUp
                                                start={0}
                                                end={28}
                                                decimals={1}
                                                duration={4}
                                            />
                                            0</span>k</h2>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card className="card-animate">
                        <CardBody>
                            <div >
                                <div>
                                    <div>
                                        <div className="avatar-sm flex-shrink-0 mb-3">
                                            <span className="avatar-title bg-info-subtle rounded-circle fs-2">
                                                <FeatherIcon
                                                    icon="users"
                                                    className="text-info"
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <p className="fw-medium text-muted mb-0">Rooms occupied</p>
                                    <h2 className="mt-2 ff-secondary fw-semibold">
                                        <span className="counter-value">
                                            <CountUp
                                                start={0}
                                                end={28}
                                                decimals={1}
                                                duration={4}
                                            />
                                            0</span>k</h2>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Widget;