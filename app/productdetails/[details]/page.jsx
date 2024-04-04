"use client";
import "../../app.css";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineShoppingCart } from "react-icons/md";
import {
  getDetails,
  increment,
  decrement,
  add,
} from "@/ReduxSystem/DetailsSlice";

const Page = ({ params }) => {
  const [show, setShow] = useState(false);
  const { prodDetails, count } = useSelector((state) => state.productsDetails);
  const { details } = params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetails(details));
  }, []);

  return (
    <div className="row d-flex flex-wrap bg-white  m-4 p-4 ">
      <div className="col-lg-6 col-sm-12 col-md-6 mb-5 d-flex flex-column ">
        <div>
          <img
            width={"100%"}
            className="zoom"
            onClick={() => setShow(true)}
            src={prodDetails.thumbnail}
            alt=""
          />
          <Modal
            size="lg"
            centered="true"
            show={show}
            onHide={() => setShow(false)}
            className=" bg-black bg-opacity-75"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Carousel interval={100000}>
              {prodDetails.images &&
                prodDetails.images.map((img, index) => (
                  <Carousel.Item key={index} className="carsWidth">
                    <img
                      src={img}
                      className="text-center m-auto d-block align-items-center h-100"
                    />
                  </Carousel.Item>
                ))}
            </Carousel>
          </Modal>
        </div>
        {/* //////////////////////////////////////// */}
        <div className="row d-flex justify-content-evenly p-4">
          {prodDetails.images &&
            prodDetails.images.map((img, index) => (
              <img
                onClick={() => setShow(true)}
                key={index}
                className="col-2 zoom zoomIn"
                src={img}
                alt=""
              />
            ))}
        </div>
      </div>
      <div className="col-lg-6 col-sm-12 col-md-6 d-flex flex-column alignItems">
        <p className="fw-bold">{prodDetails.title}</p>
        <hr />
        <p className="text-secondary ">{prodDetails.description}</p>
        <div className="text-secondary d-flex align-items-baseline">
          <p>Rating: {prodDetails.rating} </p>
          <p className="text-success fs-4 ms-1 me-1">|</p>
          <p> Brand: {prodDetails.brand} </p>
          <p className="text-success fs-4 ms-1 me-1">|</p>
          <p>Category: {prodDetails.category} </p>
        </div>
        <div className="p-3 bg-light">
          <div className="d-flex">
            <p className=" text-secondary text-decoration-line-through me-2">
              EGP {prodDetails.price}
            </p>
            <p className="text-secondary"> Inclusive of taxes</p>
          </div>
          <div className="d-flex align-items-center">
            <p className="text-success fs-5 fw-bold">
              EGP{" "}
              {Math.ceil(
                prodDetails.price -
                  (prodDetails.price * prodDetails.discountPercentage) / 100
              )}
            </p>
            <p
              style={{ fontSize: "small" }}
              className="ms-3 text-white pt-1 pb-1 ps-3 pe-3 bg-success"
            >
              {prodDetails.discountPercentage} %Off
            </p>
          </div>
        </div>
        <div
          style={{ marginBottom: "2.5em", marginTop: "2.4em" }}
          className="d-flex align-items-center"
        >
          <h6>Quantity: </h6>
          <div className="d-flex bg-light justify-content-center align-items-baseline shadow-sm rounded-2 gap-1 ms-2 pt-1 pb-1">
            <button
              disabled={count < 2 && true}
              className="margin bg-white border-0 ps-3 pe-3 pt-1 pb-1"
              onClick={() => dispatch(decrement())}
            >
              -
            </button>
            <p className="margin bg-white ps-3 pe-3 pt-1 pb-1">{count}</p>
            <button
              className="margin bg-white border-0 ps-3 pe-3 pt-1 pb-1"
              onClick={() => dispatch(increment())}
            >
              +
            </button>
          </div>
        </div>
        <div>
          <button
            onClick={() => dispatch(add())}
            className="btn btn-success me-3"
          >
            <MdOutlineShoppingCart className="me-1" /> Add to Cart
          </button>
          <button className="btn btn-success">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
