import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  Modal,
  Form,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Label,
  Input,
  FormFeedback,
  Button
} from "reactstrap";

import Masonry from "react-masonry-component";

import { UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap";

import { Link } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import { isEmpty } from "lodash";
import * as moment from "moment";

// Formik
import * as Yup from "yup";
import { useFormik } from "formik";

// Export Modal
import ExportCSVModal from "../../../Components/Common/ExportCSVModal";

//Import Breadcrumb
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import DeleteModal from "../../../Components/Common/DeleteModal";

//redux
import { useSelector, useDispatch } from "react-redux";
import TableContainerPromotions from "../../../Components/Common/TableContainerPromotions";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../../../Components/Common/Loader";
import { createSelector } from "reselect";

import { gallery } from "../../../common/data";

import {
  getRooms as onGetRooms,
  getRoomPhotos as onGetRoomPhotos,
  updateRooms as onUpdateRooms,
  addRoom as onAddRoom,
  deleteRoom as onDeleteRoom
} from "../../../slices/thunks";

const Details = () => {
  const dispatch = useDispatch();

  const selectLayoutState = (state) => state.Property;
  const propertyRoomsProperties = createSelector(
    selectLayoutState,
    (property) => ({
      rooms: property.rooms,
      roomPhotos: property.roomPhotos
    })
  );

  const {
    rooms,
    roomPhotos
  } = useSelector(propertyRoomsProperties)

  const [isEdit, setIsEdit] = useState(false);
  const [customer, setCustomer] = useState([]);
  const [roomPictures, setRoomPicture] = useState([])

  // Delete customer
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteModalMulti, setDeleteModalMulti] = useState(false);

  const [modal, setModal] = useState(false);

  const [displayCategory, setCategory] = useState("All");
  const [index, setIndex] = useState(-1);

  const [error, setError] = useState(false)

  const filterGallery = ({ category }) => {
    return (
      (displayCategory === category || displayCategory === "All")
    );
  };

  const filteredGallery = gallery.filter(({ category }) => filterGallery({ category }));

  const toggle = useCallback(() => {
    if (modal) {
      setModal(false);
      setCustomer(null);
    } else {
      setModal(true);
    }
  }, [modal]);

  const customermocalstatus = [
    {
      options: [
        { label: "Status", value: "Status" },
        { label: "Active", value: "Active" },
        { label: "Block", value: "Block" },
      ],
    },
  ];

  // Delete Data
  const onClickDelete = (customer) => {
    setCustomer(customer);
    setDeleteModal(true);
  };

  // validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      roomType: (customer && customer.roomType) || '',
      guests: (customer && customer.guests) || '',
      beds: (customer && customer.beds) || '',
      bathroom: (customer && customer.bathroom) || '',
      noOfRooms: (customer && customer.noOfRooms) || '',
      price: (customer && customer.price) || '',
    },
    validationSchema: Yup.object({
      roomType: Yup.string().required("Please Enter Room Type"),
      guests: Yup.string().required("Please Enter No Of Guests"),
      beds: Yup.string().required("Please Enter No Of Beds"),
      bathroom: Yup.string().required("Please Enter No Of Bathrooms"),
      noOfRooms: Yup.string().required("Please Enter No Of Rooms Available"),
      price: Yup.string().required("Please Enter Price")
    }),
    onSubmit: (values) => {
      if (isEdit) {
        const updatedRoom = {
          hotelId: sessionStorage.getItem('hotel_id'),
          roomType: values.roomType,
          guests: values.guests,
          beds: values.beds,
          bathroom: values.bathroom,
          noOfRooms: values.noOfRooms,
          price: values.price,
        };

        // update customer
        dispatch(onUpdateRooms({id: customer._id, data: updatedRoom}));
        validation.resetForm();
      } else {
        const newRoom = {
          hotelId: sessionStorage.getItem('hotel_id'),
          roomType: values["roomType"],
          guests: values["guests"],
          beds: values["beds"],
          bathroom: values["bathroom"],
          noOfRooms: values["noOfRooms"],
          price: values["price"],
        };
        // save new customer
        dispatch(onAddRoom(newRoom));
        validation.resetForm();
      }
      toggle();
    },
  });

  // Delete Data
  const handleDeleteCustomer = () => {
    if (customer) {
      dispatch(onDeleteRoom(customer._id));
      setDeleteModal(false);
    }
  };

  // Update Data
  const handleCustomerClick = useCallback((arg) => {
    const customer = arg;

    console.log(arg._id);

    setCustomer({
      id: arg._id,
      roomType: customer.roomType,
      guests: customer.guests,
      beds: customer.beds,
      bathroom: customer.bathroom,
      noOfRooms: customer.noOfRooms,
      price: customer.price,
    });

    setIsEdit(true);
    toggle();
  }, [toggle]);


  useEffect(() => {
    if (rooms && !rooms.length) {
      dispatch(onGetRooms(localStorage.getItem('hotel_id')));
      dispatch(onGetRoomPhotos(localStorage.getItem('hotel_id')));
    }
  }, [dispatch, rooms]);


  useEffect(() => {
    setCustomer(rooms);
  }, [rooms]);

  useEffect(() => {
    if (!isEmpty(rooms)) {
      setCustomer(rooms);
      setIsEdit(false);
    }
  }, [rooms]);

  useEffect(() => {
    console.log(customer, 'ccccccccccc');
  }, [customer])

  // Add Data
  const handleCustomerClicks = () => {
    setCustomer("");
    setIsEdit(false);
    toggle();
  };

  // Node API 
  // useEffect(() => {
  //   if (isCustomerCreated) {
  //     setCustomer(null);
  //     dispatch(onGetCustomers());
  //   }
  // }, [
  //   dispatch,
  //   isCustomerCreated,
  // ]);

  const handleValidDate = date => {
    const date1 = moment(new Date(date)).format("DD MMM Y");
    return date1;
  };

  // Checked All
  const checkedAll = useCallback(() => {
    const checkall = document.getElementById("checkBoxAll");
    const ele = document.querySelectorAll(".customerCheckBox");

    if (checkall.checked) {
      ele.forEach((ele) => {
        ele.checked = true;
      });
    } else {
      ele.forEach((ele) => {
        ele.checked = false;
      });
    }
    deleteCheckbox();
  }, []);

  // Delete Multiple
  const [selectedCheckBoxDelete, setSelectedCheckBoxDelete] = useState([]);
  const [isMultiDeleteButton, setIsMultiDeleteButton] = useState(false);

  const deleteMultiple = () => {
    const checkall = document.getElementById("checkBoxAll");
    selectedCheckBoxDelete.forEach((element) => {
      dispatch(onDeleteCustomer(element.value));
      setTimeout(() => { toast.clearWaitingQueue(); }, 3000);
    });
    setIsMultiDeleteButton(false);
    checkall.checked = false;
  };

  const deleteCheckbox = () => {
    const ele = document.querySelectorAll(".customerCheckBox:checked");
    ele.length > 0 ? setIsMultiDeleteButton(true) : setIsMultiDeleteButton(false);
    setSelectedCheckBoxDelete(ele);
  };

  // Customers Column
  const columns = useMemo(
    () => [
      {
        Header: 'Room Type',
        accessor: 'roomType',
        hiddenColumns: true,
        Cell: (cell) => {
          return <div>{cell.value}</div>
        }
      },
      {
        Header: "Guests",
        accessor: "guests",
        filterable: false,
        Cell: (cell) => {
          return <div>{cell.value}</div>
        }
      },
      {
        Header: "Beds",
        accessor: "beds",
        filterable: false,
        Cell: (cell) => {
          return <div>{cell.value}</div>
        }
      },
      {
        Header: "Bathroom",
        accessor: "bathroom",
        filterable: false,
        Cell: (cell) => {
          return <div>{cell.value}</div>
        }
      },
      {
        Header: "Price",
        accessor: "price",
        filterable: false,
        Cell: (cell) => {
          return <div>{cell.value}</div>
        }
      },
      {
        Header: "Room of this type",
        accessor: "noOfRooms",
        filterable: false,
        Cell: (cell) => {
          return <div>{cell.value}</div>
        }
      },
      {
        Header: "Action",
        Cell: (cellProps) => {
          return (
            <ul className="list-inline hstack gap-2 mb-0">
              <li className="list-inline-item edit" title="Edit">
                <Link
                  to="#"
                  className="text-primary d-inline-block edit-item-btn"
                  onClick={() => { handleCustomerClick(cellProps.row.original); }}
                >

                  <i className="ri-pencil-fill fs-16"></i>
                </Link>
              </li>
              <li className="list-inline-item" title="Remove">
                <Link
                  to="#"
                  className="text-danger d-inline-block remove-item-btn"
                  onClick={() => { const customerData = cellProps.row.original; onClickDelete(customerData); }}
                >
                  <i className="ri-delete-bin-5-fill fs-16"></i>
                </Link>
              </li>
            </ul>
          );
        },
      },
    ],
    [handleCustomerClick, checkedAll]
  );

  useEffect(() => {
    if(roomPhotos) {
      setRoomPicture(roomPhotos)
    }
  }, [roomPhotos])

  const dateFormat = () => {
    let d = new Date(),
      months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return ((d.getDate() + ' ' + months[d.getMonth()] + ', ' + d.getFullYear()).toString());
  };

  const [date, setDate] = useState(dateFormat());

  const dateformate = (e) => {
    const date = e.toString().split(" ");
    const joinDate = (date[2] + " " + date[1] + ", " + date[3]).toString();
    setDate(joinDate);
  };

  // Export Modal
  const [isExportCSV, setIsExportCSV] = useState(false);

  document.title = "Customers | Velzon - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <ExportCSVModal
          show={isExportCSV}
          onCloseClick={() => setIsExportCSV(false)}
          data={rooms}
        />
        <DeleteModal
          show={deleteModal}
          onDeleteClick={handleDeleteCustomer}
          onCloseClick={() => setDeleteModal(false)}
        />
        <DeleteModal
          show={deleteModalMulti}
          onDeleteClick={() => {
            deleteMultiple();
            setDeleteModalMulti(false);
          }}
          onCloseClick={() => setDeleteModalMulti(false)}
        />
        <Container fluid>
          <h3 className='d-flex'>Room Details</h3>
          <Row>
            <Col lg={12}>
              <Card id="customerList" className="bg-transparent">
                <CardHeader className="border-0 bg-transparent">
                  <Row className="g-4 align-items-center justify-content-end">
                    <div className="col-sm-auto">
                      <div>
                        {isMultiDeleteButton && <button className="btn btn-soft-danger me-1"
                          onClick={() => setDeleteModalMulti(true)}
                        ><i className="ri-delete-bin-2-line"></i></button>}
                        <button
                          type="button"
                          className="btn btn-danger add-btn"
                          id="create-btn"
                          onClick={() => { setIsEdit(false); toggle(); }}
                        >
                          Add New Room
                        </button>
                      </div>
                    </div>
                  </Row>
                </CardHeader>
                <div className="card-body pt-0 bg-white">
                  <div>
                    {rooms && rooms.length ? (
                      <TableContainerPromotions
                        columns={columns}
                        data={(rooms || [])}
                        isGlobalFilter={false}
                        isAddUserList={false}
                        customPageSize={8}
                        className="custom-header-css"
                        handleCustomerClick={handleCustomerClicks}
                        isCustomerFilter={false}
                        SearchPlaceholder='Search for customer, email, phone, status or something...'
                      />
                    ) : (<h4 className="mt-3 text-center">No rooms found!</h4>)
                    }
                  </div>
                  <Modal id="showModal" isOpen={modal} toggle={toggle} centered>
                    <ModalHeader className="bg-light p-3" toggle={toggle}>
                      {!!isEdit ? "Edit Room" : "Add Room"}
                    </ModalHeader>
                    <Form className="tablelist-form" onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}>
                      <ModalBody>

                        {/* Room Type */}
                        <div className="mb-3">
                          <Label htmlFor="room-type-field" className="form-label">
                            Room Type
                          </Label>
                          <Input
                            type="select"
                            name="roomType"
                            id="room-type-field"
                            className={`form-control ${validation.touched.roomType && validation.errors.roomType ? 'is-invalid' : ''}`}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.roomType || ""}
                          >
                            {/* Add options for room types */}
                            <option value="">Select Room Type</option>
                            <option value="Single">Single</option>
                            <option value="Double">Double</option>
                            <option value="Twin">Twin</option>
                            <option value="Triple">Triple</option>
                            <option value="Quadruple">Quadruple</option>
                            <option value="Studio">Studio</option>
                            <option value="Apartment">Apartment</option>
                            {/* Add other room types as needed */}
                          </Input>
                          {validation.touched.roomType && validation.errors.roomType ? (
                            <div className="invalid-feedback">{validation.errors.roomType}</div>
                          ) : null}
                        </div>

                        {/* Guests */}
                        <div className="mb-3">
                          <Label htmlFor="guests-field" className="form-label">
                            Guests
                          </Label>
                          <Input
                            type="number"
                            name="guests"
                            id="guests-field"
                            className={`form-control ${validation.touched.guests && validation.errors.guests ? 'is-invalid' : ''}`}
                            placeholder="Enter number of guests"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.guests || ""}
                          />
                          {validation.touched.guests && validation.errors.guests ? (
                            <div className="invalid-feedback">{validation.errors.guests}</div>
                          ) : null}
                        </div>

                        {/* Beds */}
                        <div className="mb-3">
                          <Label htmlFor="beds-field" className="form-label">
                            Beds
                          </Label>
                          <Input
                            type="number"
                            name="beds"
                            id="beds-field"
                            className={`form-control ${validation.touched.beds && validation.errors.beds ? 'is-invalid' : ''}`}
                            placeholder="Enter number of beds"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.beds || ""}
                          />
                          {validation.touched.beds && validation.errors.beds ? (
                            <div className="invalid-feedback">{validation.errors.beds}</div>
                          ) : null}
                        </div>

                        {/* Bathroom */}
                        <div className="mb-3">
                          <Label htmlFor="bathroom-field" className="form-label">
                            Bathroom
                          </Label>
                          <Input
                            type="number"
                            name="bathroom"
                            id="bathroom-field"
                            className={`form-control ${validation.touched.bathroom && validation.errors.bathroom ? 'is-invalid' : ''}`}
                            placeholder="Enter number of bathrooms"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.bathroom || ""}
                          />
                          {validation.touched.bathroom && validation.errors.bathroom ? (
                            <div className="invalid-feedback">{validation.errors.bathroom}</div>
                          ) : null}
                        </div>

                        {/* No Of Rooms */}
                        <div className="mb-3">
                          <Label htmlFor="rooms-field" className="form-label">
                            No Of Rooms
                          </Label>
                          <Input
                            type="number"
                            name="noOfRooms" // Updated field name here
                            id="rooms-field"
                            className={`form-control ${validation.touched.noOfRooms && validation.errors.noOfRooms ? 'is-invalid' : ''}`}
                            placeholder="Enter number of rooms"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.noOfRooms || ""}
                          />
                          {validation.touched.noOfRooms && validation.errors.noOfRooms ? (
                            <div className="invalid-feedback">{validation.errors.noOfRooms}</div>
                          ) : null}
                        </div>

                        {/* Price */}
                        <div className="mb-3">
                          <Label htmlFor="price-field" className="form-label">
                            Price
                          </Label>
                          <Input
                            type="number"
                            name="price"
                            id="price-field"
                            className={`form-control ${validation.touched.price && validation.errors.price ? 'is-invalid' : ''}`}
                            placeholder="Enter price"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.price || ""}
                          />
                          {validation.touched.price && validation.errors.price ? (
                            <div className="invalid-feedback">{validation.errors.price}</div>
                          ) : null}
                        </div>
                      </ModalBody>
                      <ModalFooter>
                        <div className="hstack gap-2 justify-content-end">
                          <button type="button" className="btn btn-light" onClick={() => { setModal(false); }}> Close </button>

                          <button type="submit" className="btn btn-success"> {!!isEdit ? "Update" : "Add Room"} </button>
                        </div>
                      </ModalFooter>
                    </Form>
                  </Modal>
                  <ToastContainer closeButton={false} limit={1} />
                </div>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Masonry className="row gallery-wrapper">
                {roomPictures.length>0 && roomPictures.map(({ link, title, auther, likes, comments }, key) => (
                  <Col xxl={4} xl={4} sm={4} className="element-item project designing development" key={key}>
                    <Card className="gallery-box border-0">
                      <div className="gallery-container">
                        <Link className="image-popup" to="#" onClick={() => setIndex(key)}>
                          <img className="gallery-img img-fluid mx-auto" src={link} alt="" />
                          {/* <div className="gallery-overlay">
                            <h5 className="overlay-caption">{title}</h5>
                          </div> */}
                        </Link>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Masonry>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Details;
