import React, { useState, useEffect } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { AudiencesCharts } from "../../../pages/DashboardAnalytics/DashboardAnalyticsCharts";
import { getAudiencesMetricsChartsData } from "../../../slices/thunks";
import { createSelector } from "reselect";
import { Link } from "react-router-dom";
// import { BiThreeDots, BiMessageSquareDetail } from "react-icons/bi";

const FinanceOverview = () => {
  const dispatch = useDispatch();
  const [chartData, setchartData] = useState([]);

  const audiencesData = createSelector(
    (state) => state.DashboardAnalytics.audiencesMetricsData,
    (audiencesMetricsData) => audiencesMetricsData
  );
  const audiencesMetricsData = useSelector(audiencesData);

  useEffect(() => {
    setchartData(audiencesMetricsData);
  }, [audiencesMetricsData]);

  const onChangeChartPeriod = (pType) => {
    dispatch(getAudiencesMetricsChartsData(pType));
  };

  useEffect(() => {
    dispatch(getAudiencesMetricsChartsData("all"));
  }, [dispatch]);

  return (
    <Row style={{ paddingTop: "4rem" }}>
      <Col xl={16}>
        <div className="card">
          <CardBody>
            <div className="mb-4">
              <h5
                className="font-weight-bold"
                style={{
                  color: "#616161",
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Reservation Statement
              </h5>
              <p style={{ color: "#616161", fontSize: "14px" }}>
                For questions about invoicing or other matters related to
                finance, feel free to contact our{" "}
                <Link to="/#" style={{ color: "#FF5F63" }}>
                  finance department.
                </Link>
                .
              </p>
            </div>

            <Row>
              <Col xl={7}>
                <Card style={{ boxShadow: "none" }}>
                  <CardBody className="p-0">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h5
                        className="font-weight-bold"
                        style={{
                          color: "#616161",
                          fontSize: "1rem",
                          fontWeight: "bold",
                        }}
                      >
                        Monthly Gross Revenue Report
                      </h5>
                      <p>{/* <... /> */}</p>
                    </div>

                    <AudiencesCharts
                      series={chartData}
                      dataColors='["--vz-success", "--vz-light"]'
                    />
                  </CardBody>
                </Card>
              </Col>
              <Col xl={4}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "10px",
                    backgroundColor: "#FF5F630F",
                    padding: "30px",
                    gap: "10px",
                    justifyContent: "center",
                    alignItems : "flex-start"

                  }}
                >
                    <i className="bi bi-mic"></i>
                  <p
                    style={{
                      color: "#676C7B",
                      fontSize: "13px",
                      fontWeight: "bold",
                    }}
                  >
                    Keep your Reservations up to date by making any necessary
                    changes within 48 hours of the guest's check-out. This way
                    you can reduce the time you spend with disputes.
                  </p>
                  <p style={{ color: "#676C7B", fontSize: "12px" }}>
                    Something wrong with the invoice? You can submit a new
                    dispute to cover exceptional cases
                  </p>
                </div>
              </Col>
            </Row>
          </CardBody>
          <Row>
            <Col xl={16}>
              <div className="card">
                <CardBody>
                  <div
                    className="mb-4"
                    style={{ marginLeft: "20px", width: "30%" }}
                  >
                    <h5
                      className="font-weight-bold"
                      style={{
                        color: "#616161",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        marginBottom: "10px",
                      }}
                    >
                      Your Current payment method
                    </h5>

                    <p style={{ color: "#616161", fontSize: "14px" }}>
                      Bank Transfer
                    </p>

                    <p
                      style={{
                        color: "#616161",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      Bank Details
                    </p>

                    <p
                      style={{
                        color: "#616161",
                        fontSize: "14px",
                        marginBottom: "15px",
                      }}
                    >
                      Standard Chartered Bank Limited 44a Des Voeux Road West,
                      Central, Hong Kong SWIFT: abcdefgh Account number:
                      12345678910 Account Holder: SuvaTrip
                    </p>
                  </div>
                </CardBody>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default FinanceOverview;
