import React from "react";
import { Card, CardBody, Col, Table, Button, Row } from "reactstrap";
import { Link } from "react-router-dom";

export default function Invoice() {
  return (
    <>
      <Row>
        <Col xl={16}>
          <Card>
            <CardBody>
              <div className="mb-4" style={{ marginTop: "5rem" }}>
                <h5
                  className="font-weight-bold"
                  style={{ color: "#616161", fontSize: "1rem" }}
                >
                  Invoices
                </h5>
                <p className="mb-1" style={{ color: "#616161" }}>
                  We produce your invoice based on the check-out date of your
                  reservations.
                </p>
              </div>

              <div className="d-flex justify-content-end mb-3">
                <Button
                  color="primary"
                  className="me-2"
                  style={{
                    background: "#FF5F63",
                    borderColor: "#FF5F63",
                    borderRadius: "5px",
                  }}
                >
                  Add Deal
                </Button>

                <Button
                  color="light"
                  style={{ background: "#FFFFFF", borderColor: "#E4E6EF" }}
                >
                  <i className="ri-filter-3-line"></i> Filter
                </Button>
              </div>

              <div className="table-responsive">
                <Table
                  className="align-middle table-nowrap mb-0"
                  style={{ width: "100%" }}
                >
                  <thead style={{ background: "#F7F9FC" }}>
                    <tr>
                      <th scope="col" style={{ color: "#667085" }}>
                        Document Name
                      </th>
                      <th scope="col" style={{ color: "#667085" }}>
                        Number
                      </th>
                      <th scope="col" style={{ color: "#667085" }}>
                        Date
                      </th>
                      <th scope="col" style={{ color: "#667085" }}>
                        Period
                      </th>
                      <th scope="col" style={{ color: "#667085" }}>
                        Action
                      </th>
                      <th scope="col" style={{ color: "#667085" }}>
                        Status
                      </th>
                      <th scope="col" style={{ color: "#667085" }}>
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p style={{ color: "#2B2F38", fontWeight: "600" }}>
                          Commission
                        </p>
                      </td>
                      <td>
                        <span>3723726372</span>{" "}
                        <Button color="light" size="sm">
                          <i className="ri-file-copy-2-line"></i>
                        </Button>
                      </td>
                      <td>21/02/23</td>
                      <td>1 Jul - 31 Jul</td>
                      <td>
                        <Link to="#" style={{ color: "#FF5F63" }}>
                          PDF | View Statement
                        </Link>
                      </td>
                      <td>
                        <Link to="#" style={{ color: "#FF5F63" }}>
                          Overdue(due by 5 Aug)
                        </Link>
                      </td>
                      <td>
                        <strong>US $1.7</strong>
                      </td>
                    </tr>
                  
                  </tbody>
                  <tbody>
                    <tr>
                      <td>
                        <p style={{ color: "#2B2F38", fontWeight: "600" }}>
                          Commission
                        </p>
                      </td>
                      <td>
                        <span>3723726372</span>{" "}
                        <Button color="light" size="sm">
                          <i className="ri-file-copy-2-line"></i>
                        </Button>
                      </td>
                      <td>21/02/23</td>
                      <td>1 Jul - 31 Jul</td>
                      <td>
                        <Link to="#" style={{ color: "#FF5F63" }}>
                          PDF | View Statement
                        </Link>
                      </td>
                      <td>
                        <Link to="#" style={{ color: "#FF5F63" }}>
                          Overdue(due by 5 Aug)
                        </Link>
                      </td>
                      <td>
                        <strong>US $1.7</strong>
                      </td>
                    </tr>
                   
                  </tbody>
                </Table>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "1rem",
                }}
              >
                <Button
                  color="primary"
                  style={{
                    background: "#FF5F63",
                    borderRadius: "5px",
                    marginRight: "1rem",
                    borderColor: "#FF5F63",
                  }}
                >
                  Proceed to Pay
                </Button>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",

                    margin: "0 1rem",
                    padding: "0",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "14px",
                      marginBottom: "2px",
                    }}
                  >
                    Amount to be paid: <strong>US $1.7</strong>
                  </p>
                  <p style={{ fontSize: "12px" }}>
                    Total amount due:{" "}
                    <span style={{ color: "#FF5F63" }}>US $1.57</span>
                  </p>
                </div>
              </div>

              <div className="d-none code-view">
                {/* Your code for code view */}
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
