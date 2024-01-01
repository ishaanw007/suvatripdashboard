import React, { useState, useEffect } from 'react';
import { Card, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { SalesForecastCharts } from './DashboardCharts';
import { useSelector, useDispatch } from "react-redux";
import { getSalesChartsData } from '../../../slices/thunks';
import { createSelector } from 'reselect';

const ReservationStatistics = () => {
    
    const dispatch = useDispatch();

    const [chartData, setchartData] = useState([]);

    const selectDashboardData = createSelector(
        (state) => state.DashboardCRM.salesForecastData,
        (salesForecastData) => salesForecastData
      );
    // Inside your component
    const salesForecastData = useSelector(selectDashboardData);


    useEffect(() => {
        setchartData(salesForecastData);
    }, [salesForecastData]);

    const [seletedMonth, setSeletedMonth] = useState("Nov 2021");
    const onChangeChartPeriod = pType => {
        setSeletedMonth(pType);
        dispatch(getSalesChartsData(pType));
    };

    useEffect(() => {
        dispatch(getSalesChartsData("nov"));
    }, [dispatch]);

    return (
        <React.Fragment>
            <Col md={8}>
                <Card>
                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Reservation Statistics</h4>
                    </CardHeader>
                    <div className="card-body pb-0">
                        <div id="sales-forecast-chart" className="apex-charts">
                            <SalesForecastCharts series={chartData} dataColors='["--vz-primary", "--vz-success", "--vz-warning"]'/>
                        </div>
                    </div>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default ReservationStatistics;