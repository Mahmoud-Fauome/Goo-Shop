"use client";
import "./app.css";
import { useEffect } from "react";
import { getProducts } from "@/ReduxSystem/ProductsSlice";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Link from "next/link";
export default function Home() {
  const {
    products,
    smartPhones,
    laptops,
    fragrances,
    skinCare,
    groceries,
    homeDecoration,
  } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div>
      <Carousel
        controls={false}
        interval={1500}
        data-bs-theme="dark"
        className="bg-white p-3 mb-3"
      >
        <Carousel.Item
          style={{ height: window.innerHeight >= "800px" && "12em" }}
        >
          <img
            className="d-block w-100"
            src="	https://goomarket.vercel.app/assets/slider_img_1-aa711fe6.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item
          style={{ height: window.innerHeight >= "800px" && "12em" }}
        >
          <img
            className="d-block w-100"
            src="https://goomarket.vercel.app/assets/slider_img_2-ad43ef2a.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      {/* ////////////////CARD///////////// */}
      <div className=" pt-5">
        <h4 className="border-start border-success border-4 mx-4 fw-bold text-secondary bg-secondary-subtle shadow p-4">
          SEE OUR PRODUCTS
        </h4>
        <div className=" d-flex flex-wrap justify-content-center  mt-5">
          {products.map((product, index) => (
            <Card
              key={index}
              className="position-relative shadow text-center mx-2"
              style={{ width: "17.5rem", marginBottom: "4em" }}
            >
              <p
                className="position-absolute shadow mt-4 px-4 p-2 fw-bold bg-success text-white"
                style={{ marginLeft: "-2px" }}
              >
                {product.category}
              </p>
              <Card.Img
                className="mb-2 shadow object-fit-cover"
                style={{ height: "20rem" }}
                variant="top"
                src={product.images[0]}
              />
              <Card.Body>
                <Card.Title className="fs-6 fw-bold">
                  Brand {product.brand}
                </Card.Title>
                <hr />
                <Card.Text className="text-secondary">
                  {product.title}
                </Card.Text>
                <div className=" d-flex justify-content-center ">
                  <Card.Text className="text-secondary fs-6 me-2 text-decoration-line-through">
                    EGP {product.price}
                  </Card.Text>
                  <Card.Text className="border-bottom border-success text-dark-emphasis fs-6 fw-bold me-2">
                    EGP{" "}
                    {Math.ceil(
                      product.price -
                        (product.price * product.discountPercentage) / 100
                    )}
                  </Card.Text>
                  <Card.Text className="fs-6 text-success">(%off)</Card.Text>
                </div>
                <Button
                  variant="success"
                  className="hov bg-secondary-subtle fw-bold border-0 w-100"
                  style={{ fontSize: "smaller" }}
                >
                  <Link
                    className="text-decoration-none text-black"
                    href={`/productdetails/${product.id}`}
                  >
                    {" "}
                    SHOW DETAILS
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
        {/* ////////////////SMARPHONES///////////// */}
        <div>
          <h4 className="border-start border-success border-4 mx-4 fw-bold text-secondary bg-secondary-subtle shadow p-4">
            SEE OUR SMARTPHONES
          </h4>
          <div className=" d-flex flex-wrap justify-content-center mt-5">
            {smartPhones.map((smartPhone, index) => (
              <Card
                key={index}
                className="position-relative shadow text-center mx-2"
                style={{ width: "17.5rem", marginBottom: "4em" }}
              >
                <p
                  className="position-absolute shadow mt-4 px-4 p-2 fw-bold bg-success text-white"
                  style={{ marginLeft: "-2px" }}
                >
                  {smartPhone.category}
                </p>
                <Card.Img
                  className="mb-2 shadow object-fit-cover"
                  style={{ height: "20rem" }}
                  variant="top"
                  src={smartPhone.images[0]}
                />
                <Card.Body>
                  <Card.Title className="fs-6 fw-bold">
                    Brand {smartPhone.brand}
                  </Card.Title>
                  <hr />
                  <Card.Text className="text-secondary">
                    {smartPhone.title}
                  </Card.Text>
                  <div className=" d-flex justify-content-center ">
                    <Card.Text className="text-secondary fs-6 me-2 text-decoration-line-through">
                      EGP {smartPhone.price}
                    </Card.Text>
                    <Card.Text className="border-bottom border-success text-dark-emphasis fs-6 fw-bold me-2">
                      EGP{" "}
                      {Math.ceil(
                        smartPhone.price -
                          (smartPhone.price * smartPhone.discountPercentage) /
                            100
                      )}
                    </Card.Text>
                    <Card.Text className="fs-6 text-success">(%off)</Card.Text>
                  </div>
                  <Button
                    variant="success"
                    className="hov  bg-secondary-subtle fw-bold text-black border-0 w-100"
                    style={{ fontSize: "smaller" }}
                  >
                    <Link
                      className="text-decoration-none text-black"
                      href={`/productdetails/${smartPhone.id}`}
                    >
                      {" "}
                      SHOW DETAILS
                    </Link>{" "}
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
        {/* ////////////////LAPTOPS///////////// */}
        <div>
          <h4 className="border-start border-success border-4 mx-4 fw-bold text-secondary bg-secondary-subtle shadow p-4">
            SEE OUR LAPTOPS
          </h4>
          <div className=" d-flex flex-wrap justify-content-center mt-5">
            {laptops.map((laptop, index) => (
              <Card
                key={index}
                className="position-relative shadow text-center mx-2"
                style={{ width: "17.5rem", marginBottom: "4em" }}
              >
                <p
                  className="position-absolute shadow mt-4 px-4 p-2 fw-bold bg-success text-white"
                  style={{ marginLeft: "-2px" }}
                >
                  {laptop.category}
                </p>
                <Card.Img
                  className="mb-2 shadow object-fit-cover"
                  style={{ height: "20rem" }}
                  variant="top"
                  src={laptop.images[0]}
                />
                <Card.Body>
                  <Card.Title className="fs-6 fw-bold">
                    Brand {laptop.brand}
                  </Card.Title>
                  <hr />
                  <Card.Text className="text-secondary">
                    {laptop.title}
                  </Card.Text>
                  <div className=" d-flex justify-content-center ">
                    <Card.Text className="text-secondary fs-6 me-2 text-decoration-line-through">
                      EGP {laptop.price}
                    </Card.Text>
                    <Card.Text className="border-bottom border-success text-dark-emphasis fs-6 fw-bold me-2">
                      EGP{" "}
                      {Math.ceil(
                        laptop.price -
                          (laptop.price * laptop.discountPercentage) / 100
                      )}
                    </Card.Text>
                    <Card.Text className="fs-6 text-success">(%off)</Card.Text>
                  </div>
                  <Button
                    variant="success"
                    className="hov  bg-secondary-subtle fw-bold text-black border-0 w-100"
                    style={{ fontSize: "smaller" }}
                  >
                    <Link
                      className="text-decoration-none text-black"
                      href={`/productdetails/${laptop.id}`}
                    >
                      {" "}
                      SHOW DETAILS
                    </Link>{" "}
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
        {/* ////////////////FRAGRANCES///////////// */}
        <div>
          <h4 className="border-start border-success border-4 mx-4 fw-bold text-secondary bg-secondary-subtle shadow p-4">
            SEE OUR FRAGRANCES
          </h4>
          <div className=" d-flex flex-wrap justify-content-center mt-5">
            {fragrances.map((fragrance, index) => (
              <Card
                key={index}
                className="position-relative shadow text-center mx-2"
                style={{ width: "17.5rem", marginBottom: "4em" }}
              >
                <p
                  className="position-absolute shadow mt-4 px-4 p-2 fw-bold bg-success text-white"
                  style={{ marginLeft: "-2px" }}
                >
                  {fragrance.category}
                </p>
                <Card.Img
                  className="mb-2 shadow object-fit-cover"
                  style={{ height: "20rem" }}
                  variant="top"
                  src={fragrance.images[0]}
                />
                <Card.Body>
                  <Card.Title className="fs-6 fw-bold">
                    Brand {fragrance.brand}
                  </Card.Title>
                  <hr />
                  <Card.Text className="text-secondary">
                    {fragrance.title}
                  </Card.Text>
                  <div className=" d-flex justify-content-center ">
                    <Card.Text className="text-secondary fs-6 me-2 text-decoration-line-through">
                      EGP {fragrance.price}
                    </Card.Text>
                    <Card.Text className="border-bottom border-success text-dark-emphasis fs-6 fw-bold me-2">
                      EGP{" "}
                      {Math.ceil(
                        fragrance.price -
                          (fragrance.price * fragrance.discountPercentage) / 100
                      )}
                    </Card.Text>
                    <Card.Text className="fs-6 text-success">(%off)</Card.Text>
                  </div>
                  <Button
                    variant="success"
                    className="hov  bg-secondary-subtle fw-bold text-black border-0 w-100"
                    style={{ fontSize: "smaller" }}
                  >
                    <Link
                      className="text-decoration-none text-black"
                      href={`/productdetails/${fragrance.id}`}
                    >
                      {" "}
                      SHOW DETAILS
                    </Link>{" "}
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
        {/* ////////////////SKINCARE///////////// */}
        <div>
          <h4 className="border-start border-success border-4 mx-4 fw-bold text-secondary bg-secondary-subtle shadow p-4">
            SEE OUR SKINCARE
          </h4>
          <div className=" d-flex flex-wrap justify-content-center mt-5">
            {skinCare.map((skin, index) => (
              <Card
                key={index}
                className="position-relative shadow text-center mx-2"
                style={{ width: "17.5rem", marginBottom: "4em" }}
              >
                <p
                  className="position-absolute shadow mt-4 px-4 p-2 fw-bold bg-success text-white"
                  style={{ marginLeft: "-2px" }}
                >
                  {skin.category}
                </p>
                <Card.Img
                  className="mb-2 shadow object-fit-cover"
                  style={{ height: "20rem" }}
                  variant="top"
                  src={skin.images[0]}
                />
                <Card.Body>
                  <Card.Title className="fs-6 fw-bold">
                    Brand {skin.brand}
                  </Card.Title>
                  <hr />
                  <Card.Text className="text-secondary">{skin.title}</Card.Text>
                  <div className=" d-flex justify-content-center ">
                    <Card.Text className="text-secondary fs-6 me-2 text-decoration-line-through">
                      EGP {skin.price}
                    </Card.Text>
                    <Card.Text className="border-bottom border-success text-dark-emphasis fs-6 fw-bold me-2">
                      EGP{" "}
                      {Math.ceil(
                        skin.price -
                          (skin.price * skin.discountPercentage) / 100
                      )}
                    </Card.Text>
                    <Card.Text className="fs-6 text-success">(%off)</Card.Text>
                  </div>
                  <Button
                    variant="success"
                    className="hov  bg-secondary-subtle fw-bold text-black border-0 w-100"
                    style={{ fontSize: "smaller" }}
                  >
                    <Link
                      className="text-decoration-none text-black"
                      href={`/productdetails/${skin.id}`}
                    >
                      {" "}
                      SHOW DETAILS
                    </Link>{" "}
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
        {/* ////////////////GROCERIES///////////// */}
        <div>
          <h4 className="border-start border-success border-4 mx-4 fw-bold text-secondary bg-secondary-subtle shadow p-4">
            SEE OUR GROCERIES
          </h4>
          <div className=" d-flex flex-wrap justify-content-center mt-5">
            {groceries.map((groce, index) => (
              <Card
                key={index}
                className="position-relative shadow text-center mx-2"
                style={{ width: "17.5rem", marginBottom: "4em" }}
              >
                <p
                  className="position-absolute shadow mt-4 px-4 p-2 fw-bold bg-success text-white"
                  style={{ marginLeft: "-2px" }}
                >
                  {groce.category}
                </p>
                <Card.Img
                  className="mb-2 shadow object-fit-cover"
                  style={{ height: "20rem" }}
                  variant="top"
                  src={groce.images[0]}
                />
                <Card.Body>
                  <Card.Title className="fs-6 fw-bold">
                    Brand {groce.brand}
                  </Card.Title>
                  <hr />
                  <Card.Text className="text-secondary">
                    {groce.title}
                  </Card.Text>
                  <div className=" d-flex justify-content-center ">
                    <Card.Text className="text-secondary fs-6 me-2 text-decoration-line-through">
                      EGP {groce.price}
                    </Card.Text>
                    <Card.Text className="border-bottom border-success text-dark-emphasis fs-6 fw-bold me-2">
                      EGP{" "}
                      {Math.ceil(
                        groce.price -
                          (groce.price * groce.discountPercentage) / 100
                      )}
                    </Card.Text>
                    <Card.Text className="fs-6 text-success">(%off)</Card.Text>
                  </div>
                  <Button
                    variant="success"
                    className="hov  bg-secondary-subtle fw-bold text-black border-0 w-100"
                    style={{ fontSize: "smaller" }}
                  >
                    <Link
                      className="text-decoration-none text-black"
                      href={`/productdetails/${groce.id}`}
                    >
                      {" "}
                      SHOW DETAILS
                    </Link>{" "}
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
        {/* ////////////////HOME-DECORATION///////////// */}
        <div>
          <h4 className="border-start border-success border-4 mx-4 fw-bold text-secondary bg-secondary-subtle shadow p-4">
            SEE OUR HOME-DECORATION
          </h4>
          <div className=" d-flex flex-wrap justify-content-center mt-5">
            {homeDecoration.map((decor, index) => (
              <Card
                key={index}
                className="position-relative shadow text-center mx-2"
                style={{ width: "17.5rem", marginBottom: "4em" }}
              >
                <p
                  className="position-absolute shadow mt-4 px-4 p-2 fw-bold bg-success text-white"
                  style={{ marginLeft: "-2px" }}
                >
                  {decor.category}
                </p>
                <Card.Img
                  className="mb-2 shadow object-fit-cover"
                  style={{ height: "20rem" }}
                  variant="top"
                  src={decor.images[0]}
                />
                <Card.Body>
                  <Card.Title className="fs-6 fw-bold">
                    Brand {decor.brand}
                  </Card.Title>
                  <hr />
                  <Card.Text className="text-secondary">
                    {decor.title}
                  </Card.Text>
                  <div className=" d-flex justify-content-center ">
                    <Card.Text className="text-secondary fs-6 me-2 text-decoration-line-through">
                      EGP {decor.price}
                    </Card.Text>
                    <Card.Text className="border-bottom border-success text-dark-emphasis fs-6 fw-bold me-2">
                      EGP{" "}
                      {Math.ceil(
                        decor.price -
                          (decor.price * decor.discountPercentage) / 100
                      )}
                    </Card.Text>
                    <Card.Text className="fs-6 text-success">(%off)</Card.Text>
                  </div>
                  <Button
                    variant="success"
                    className="hov  bg-secondary-subtle fw-bold text-black border-0 w-100"
                    style={{ fontSize: "smaller" }}
                  >
                    <Link
                      className="text-decoration-none text-black"
                      href={`/productdetails/${decor.id}`}
                    >
                      {" "}
                      SHOW DETAILS
                    </Link>{" "}
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
