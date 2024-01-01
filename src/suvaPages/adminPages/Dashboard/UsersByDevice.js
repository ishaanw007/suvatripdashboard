import React, { useState, useEffect } from 'react';
import { Card, CardHeader, Col, DropdownMenu, DropdownToggle, Dropdown, DropdownItem, CardBody } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
//Import Icons
import FeatherIcon from "feather-icons-react";

import { getUserDeviceChartsData } from "../../../slices/thunks";

import { UsersByDeviceCharts } from './DashboardAnalyticsCharts';
import { createSelector } from 'reselect';

const UsersByDevice = () => {
    const [isUserDropdown, setUserDropdown] = useState(false);
    const toggleDropdown = () => setUserDropdown(!isUserDropdown);

    const dispatch = useDispatch();

    const [chartData, setchartData] = useState([]);

    const userdeviceData = createSelector(
        (state) => state.DashboardAnalytics.userDeviceData,
        (userDeviceData) => userDeviceData
      );
    // Inside your component
    const userDeviceData = useSelector(userdeviceData);


    useEffect(() => {
        setchartData(userDeviceData);
    }, [userDeviceData]);

    const [seletedMonth, setSeletedMonth] = useState("today");
    const onChangeChartPeriod = pType => {
        setSeletedMonth(pType);
        dispatch(getUserDeviceChartsData(pType));
    };

    useEffect(() => {
        dispatch(getUserDeviceChartsData("today"));
    }, [dispatch]);

    return (
        <React.Fragment>
            <Col xl={4}>
                <Card className="card-height-100">
                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Guests Satisfaction Score</h4>
                        <div className="flex-shrink-0">
                            <Dropdown className="card-header-dropdown" isOpen={isUserDropdown} toggle={toggleDropdown} direction="start">
                                <DropdownToggle tag="a" className="text-reset dropdown-btn" role="button">
                                    <span className="text-muted fs-16"><i className="mdi mdi-dots-vertical align-middle"></i></span>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end" >
                                    <DropdownItem onClick={() => { onChangeChartPeriod("today"); }} className={seletedMonth === "today" ? "active" : ""}>Today</DropdownItem>
                                    <DropdownItem onClick={() => { onChangeChartPeriod("lastWeek"); }} className={seletedMonth === "lastWeek" ? "active" : ""}>Last Week</DropdownItem>
                                    <DropdownItem onClick={() => { onChangeChartPeriod("lastMonth"); }} className={seletedMonth === "lastMonth" ? "active" : ""}>Last Month</DropdownItem>
                                    <DropdownItem onClick={() => { onChangeChartPeriod("currentYear"); }} className={seletedMonth === "currentYear" ? "active" : ""}>Current Year</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </CardHeader>
                    <CardBody className='d-flex flex-column justify-content-around'>
                        <div>
                            <UsersByDeviceCharts series={chartData} dataColors='["--vz-primary", "--vz-warning", "--vz-info"]' />
                        </div>

                        <div className="table-responsive mt-3">
                            <table className="table table-borderless table-sm table-centered align-middle table-nowrap mb-0">
                                <tbody className="border-0">
                                    <tr>
                                        <td><h4 className="text-truncate fs-14 fs-medium mb-0"><i className="ri-stop-fill align-middle fs-18 text-primary me-2"></i>Satisfied</h4></td>
                                        
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default UsersByDevice;