import React, { useState, useEffect } from "react";
import {
  Container,
  Col,
  Row,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  Progress,
  Button,

} from "reactstrap";
import classnames from "classnames";
import Rating from "react-rating";
import avatar1 from "../../assets/images/users/avatar-1.jpg";

import {
  getReviews as onGetReviews
} from "../../slices/thunks";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from 'reselect';
import Loader from "../../Components/Common/Loader";


export default function Review() {
  const dispatch = useDispatch();

  const selectLayoutState = (state) => state.Reviews;
  const propertyFacilitiesProperties = createSelector(
    selectLayoutState,
    (review) => ({
      reviews: review.reviews,
      isReviewSuccess: review.isReviewSuccess
    })
  );

  const {
    reviews,
    isReviewSuccess
  } = useSelector(propertyFacilitiesProperties)

  const [justifyPillsTab, setjustifyPillsTab] = useState("1");
  const [reviewData, setReviewData] = useState()

  const justifyPillsToggle = (tab) => {
    if (justifyPillsTab !== tab) {
      setjustifyPillsTab(tab);
    }
  };

  useEffect(() => {
    dispatch(onGetReviews({id: localStorage.getItem('hotel_id'), filter: 'last30days'}));
  }, [])

  useEffect(() => {
    console.log(reviews);
    if (reviews) {
      setReviewData(reviews);
    }
  }, [reviews])


  const data = [
    { stars: 5, percentage: 55, value: 50 },
    { stars: 4, percentage: 45, value: 40 },
    { stars: 3, percentage: 35, value: 60 },
    { stars: 2, percentage: 35, value: 20 },
    { stars: 1, percentage: 55, value: 30 },
  ];

  const customStyle = {
    padding: "5px",
    border: "2px solid #D8D8D8",
    borderRadius: "5px",
    alignSelf: "center",
  };

  return (
    <>
      <Container
        style={{
          paddingTop: "4rem",
          width: "100%",
          height: "100%",
          backgroundColor: "white",
        }}
      >
        <Row className="d-flex align-items-center justify-content-between">
          <Col>
            <h5
              className="font-weight-bold"
              style={{ color: "#616161", fontSize: "1rem" }}
            >
              Reviews
            </h5>
          </Col>
          <Col xl={6} className="mt-3">
            <Nav pills className="nav-justified mb-4" style={customStyle}>
              <NavItem>
                <NavLink
                  style={{
                    cursor: "pointer",
                  }}
                  className={classnames({
                    active: justifyPillsTab === "1",
                  })}
                  onClick={() => {
                    if(justifyPillsTab!=='1') {
                      dispatch(onGetReviews({id: localStorage.getItem('hotel_id'), filter: 'last30days'})); 
                    }
                    justifyPillsToggle("1");
                  }}
                >
                  30 days
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  className={classnames({
                    active: justifyPillsTab === "2",
                  })}
                  onClick={() => {
                    if(justifyPillsTab!=='2') {
                      dispatch(onGetReviews({id: localStorage.getItem('hotel_id'), filter: '3months'})); 
                    }
                    justifyPillsToggle("2");
                  }}
                >
                  3 months
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  className={classnames({
                    active: justifyPillsTab === "3",
                  })}
                  onClick={() => {
                    if(justifyPillsTab!=='3') {
                      dispatch(onGetReviews({id: localStorage.getItem('hotel_id'), filter: '6months'})); 
                    }
                    justifyPillsToggle("3");
                  }}
                >
                  6 months
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  className={classnames({
                    active: justifyPillsTab === "4",
                  })}
                  onClick={() => {
                    if(justifyPillsTab!=='4') {
                      dispatch(onGetReviews({id: localStorage.getItem('hotel_id'), filter: '12months'})); 
                    }
                    justifyPillsToggle("4");
                  }}
                >
                  12 months
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>

        <Row className="d-flex justify-content-between">
          <Col>
            <h5
              className="font-weight-bold"
              style={{ color: "#676C7B", fontSize: "14px", margin: "10px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex.
            </h5>
          </Col>
          <Col xl={6}>
            {reviewData && <Card style={{ boxShadow: "none" }}>
              <CardBody>
                <div className="live-preview">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span
                      style={{ marginRight: "10px" }}
                    >{`5 Star`}</span>
                    <Progress
                      color="primary"
                      value={reviewData?.ratingPercentages?.fiveStars}
                      style={{ flex: 1 }}
                    >
                      {` ${reviewData?.ratingPercentages?.fiveStars}% `}
                    </Progress>
                    <span style={{ marginLeft: "10px" }}>{reviewData?.ratingCounts?.fiveStars}</span>
                  </div>
                </div>
              </CardBody>
              <CardBody>
                <div className="live-preview">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span
                      style={{ marginRight: "10px" }}
                    >{`4 Star`}</span>
                    <Progress
                      color="primary"
                      value={reviewData?.ratingPercentages?.fourStars}
                      style={{ flex: 1 }}
                    >
                      {` ${reviewData?.ratingPercentages?.fourStars}% `}
                    </Progress>
                    <span style={{ marginLeft: "10px" }}>{reviewData?.ratingCounts?.fourStars}</span>
                  </div>
                </div>
              </CardBody>
              <CardBody>
                <div className="live-preview">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span
                      style={{ marginRight: "10px" }}
                    >{`3 Star`}</span>
                    <Progress
                      color="primary"
                      value={reviewData?.ratingPercentages?.threeStars}
                      style={{ flex: 1 }}
                    >
                      {` ${reviewData?.ratingPercentages?.threeStars}% `}
                    </Progress>
                    <span style={{ marginLeft: "10px" }}>{reviewData?.ratingCounts?.threeStars}</span>
                  </div>
                </div>
              </CardBody>
              <CardBody>
                <div className="live-preview">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span
                      style={{ marginRight: "10px" }}
                    >{`2 Star`}</span>
                    <Progress
                      color="primary"
                      value={reviewData?.ratingPercentages?.twoStars}
                      style={{ flex: 1 }}
                    >
                      {` ${reviewData?.ratingPercentages?.twoStars}% `}
                    </Progress>
                    <span style={{ marginLeft: "10px" }}>{reviewData?.ratingCounts?.twoStars}</span>
                  </div>
                </div>
              </CardBody>
              <CardBody>
                <div className="live-preview">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span
                      style={{ marginRight: "10px" }}
                    >{`1 Star`}</span>
                    <Progress
                      color="primary"
                      value={reviewData?.ratingPercentages?.oneStar}
                      style={{ flex: 1 }}
                    >
                      {` ${reviewData?.ratingPercentages?.oneStar}% `}
                    </Progress>
                    <span style={{ marginLeft: "10px" }}>{reviewData?.ratingCounts?.oneStar}</span>
                  </div>
                </div>
              </CardBody>
            </Card>}
          </Col>
        </Row>

        <Row className="mt-0" style={{ boxShadow: "none", height: "100%" }}>
          <Col xxl={9}>
            <div id="job-list">
              {/* Button */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: "10px",
                }}
              >
                <Button
                  color="light"
                  style={{
                    background: "#FFFFFF",
                    borderColor: "#E4E6EF",
                    marginRight: "3rem",
                  }}
                >
                  <i className="ri-filter-3-line"></i> Filter
                </Button>
              </div>

              {/* Review Card */}
              { isReviewSuccess ? reviewData && reviewData?.data?.length > 0 ? reviewData?.data?.map((data) => {
                return(
                  <Card className="joblist-card" style={{ boxShadow: "none" }}>
                  <CardBody
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      border: "1px solid #D8D8D8",
                      width: "90%",
                      borderRadius: "10px",
                      justifyContent: "center",
                      marginLeft: "20px",
                      boxShadow: "none",
                    }}
                  >
                    <div className="d-flex">
                      <div className="d-flex align-items-center py-2">
                        <div className="avatar-xs flex-shrink-0 me-3">
                          <img
                            src={avatar1}
                            alt=""
                            className="img-fluid rounded-circle"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <div>
                            <h5 className="fs-14 mb-1">{data.user_id.username}</h5>
                          </div>
                          <div id="basic-rater" dir="ltr">
                            <Rating
                              initialRating={data.rating}
                              emptySymbol="mdi mdi-star-outline text-muted "
                              fullSymbol="mdi mdi-star text-warning "
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p
                      className="text-muted job-description "
                    >
                      {data.review}
                    </p>
                  </CardBody>
                </Card>
                )
              }) : null : <Loader />}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}



