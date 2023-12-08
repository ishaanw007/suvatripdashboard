import React from "react";
import { CardBody, Col, Row, Table } from "reactstrap";
import PreviewCardHeader from "../../../Components/Common/PreviewCardHeader";

const resStatement = () => {
  return (
    <>
      <Row>
        <Col xl={16}>
          <div className="card">
            <PreviewCardHeader title="Captions" />
            <CardBody>
              <div className="mb-4" style={{ marginTop: "3rem" }}>
                <h5
                  className="font-weight-bold"
                  style={{ color: "#616161", fontSize: "1rem" }}
                >
                  Reservation Statement
                </h5>
                <p className="mb-1" style={{ color: "#616161" }}>
                  Here you can see your reservation details that have been
                  included in your invoice.
                </p>
              </div>

              <div className="mb-3 d-flex justify-content-end">
                <button className="btn btn-outline-success me-2">
                  <i className="ri-download-2-line me-1"></i>
                  Download XLS
                </button>
                <button className="btn btn-outline-info me-2">
                  <i className="ri-download-2-line me-1"></i>
                  Download CVS
                </button>
                <button className="btn btn-outline-secondary">
                  <i className="ri-printer-line me-1"></i>
                  Print this page
                </button>
              </div>

              <div className="live-preview">
                <div className="table-responsive">
                  <Table className="caption-top table-nowrap mb-0">
                    <thead className="table-light">
                      <tr
                        style={{
                          width: "75px",
                          height: "fit-content",
                          overflow: "wrap-up",
                        }}
                      >
                        <th scope="col">Book No.</th>
                        <th scope="col">Guest Name</th>
                        <th scope="col">Check-In</th>
                        <th scope="col">Check-Out</th>
                        <th scope="col">Room nights</th>
                        <th scope="col">Com.. %</th>
                        <th scope="col">Result</th>
                        <th scope="col">Original Ammount Usd</th>
                        <th scope="col">Final Ammount Usd</th>
                        <th scope="col">Com % Ammount Usd</th>
                        <th scope="col">Desputr Com % Ammount</th>
                        <th scope="col">Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="fw-medium">01</td>
                        <td>Milana Scot</td>
                        <td>2023-01-01</td>
                        <td>2023-01-10</td>
                        <td>9</td>
                        <td>10%</td>
                        <td>Success</td>
                        <td style={{ whiteSpace: "normal" }}>$500</td>
                        <td>$600</td>
                        <td>$60</td>
                        <td>$30</td>
                        <td>No issues</td>
                      </tr>
                      <tr>
                        <td className="fw-medium">02</td>
                        <td>Jassica Welsh</td>
                        <td>2023-02-15</td>
                        <td>2023-02-20</td>
                        <td>5</td>
                        <td>8%</td>
                        <td>Success</td>
                        <td style={{ whiteSpace: "normal" }}>$300</td>
                        <td>$350</td>
                        <td>$28</td>
                        <td>$14</td>
                        <td>On time</td>
                      </tr>
                      <tr>
                        <td className="fw-medium">03</td>
                        <td>Leslie Alexander</td>
                        <td>2023-03-05</td>
                        <td>2023-03-15</td>
                        <td>10</td>
                        <td>15%</td>
                        <td>Success</td>
                        <td style={{ whiteSpace: "normal" }}>$700</td>
                        <td>$800</td>
                        <td>$120</td>
                        <td>$60</td>
                        <td>Smooth</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className="d-none code-view">
                <pre className="language-markup" style={{ height: "275px" }}>
                  <code>{/* Your code here */}</code>
                </pre>
              </div>
            </CardBody>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default resStatement;
