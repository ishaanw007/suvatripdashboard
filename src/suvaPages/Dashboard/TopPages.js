import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { guests } from "../../common/data/dashboard";

const TopPages = () => {
    const [isTopPageDropdown, setTopPageDropdown] = useState(false);
    const toggleDropdown = () => { setTopPageDropdown(!isTopPageDropdown); };
    return (
        <React.Fragment>
            <Col md={6}>
                <Card className="card-height-100">
                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Guests</h4>
                    </CardHeader>
                    <CardBody>
                        <div className="table-responsive table-card">
                            <table className="table align-middle table-borderless table-centered table-nowrap mb-0">
                                <thead className="text-muted table-light">
                                    <tr>
                                        <th scope="col">Room Number</th>
                                        <th scope="col">Reservation ID</th>
                                        <th scope="col">Check-In</th>
                                        <th scope="col">Check-Out</th>
                                        <th scope="col">Amount Paid</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(guests || []).map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.roomNumber}</td>
                                            <td>{item.reservationID}</td>
                                            <td>{item.checkIn}</td>
                                            <td>{item.checkOut}</td>
                                            <td>${item.amount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default TopPages;