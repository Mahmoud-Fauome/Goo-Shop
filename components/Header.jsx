"use client";
import "./header.css";
import { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { MdOutlineContactSupport } from "react-icons/md";
import {
  TiSocialTwitter,
  TiShoppingCart,
  TiSocialFacebookCircular,
} from "react-icons/ti";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Link from "next/link";
import { getSearchData } from "@/ReduxSystem/SearchSlice";
import { Tooltip } from "react-bootstrap";

export default function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { addToCart } = useSelector((state) => state.productsDetails);
  const count = new Set(addToCart);
  const countProduts = [...count];
  const [words, setWords] = useState("");
  const dispatch = useDispatch();
  function searchFunc() {
    dispatch(getSearchData(words));
    setWords("");
  }
  return (
    <Navbar
      className="d-flex flex-column p-4 mb-3"
      expand="lg"
      style={{ backgroundColor: "#447a48" }}
    >
      <Container fluid className="d-block">
        <div className="text-bold fs-6 border-bottom pb-1 mb-3 w-100 d-flex align-items-center flex-wrap justify-content-between  text-white">
          <div className="d-flex">
            <h6 className="text-bold">Follow us on</h6>

            <TiSocialFacebookCircular className="icon1 fs-4 mx-1" />
            <TiSocialTwitter className="fs-4 icon1" />
          </div>
          <div style={{ fontSize: "smaller" }} className="d-flex ">
            <Nav.Link className="text-decoration-none d-flex border-end border-4 border-white me-1 pe-1">
              <MdOutlineContactSupport className="fs-5" />
              Support
            </Nav.Link>
            <Nav.Link className="text-decoration-none border-end border-4 border-white me-1 pe-1">
              Register
            </Nav.Link>
            <Nav.Link className="text-decoration-none">Log In</Nav.Link>
          </div>
        </div>
        <div className="d-flex flex-wrap align-items-center">
          <div className="d-flex w-auto mb-3">
            <div className="d-flex text-white fs-2 fw-medium" href="#">
              <div className="me-2 fs-6">
                {" "}
                <RiMenu3Line className="fs-1" onClick={handleShow} />
                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="fw-bold">
                      Side Menu
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className=" me-auto my-2 my-lg-0">
                      <Nav.Link
                        as={Link}
                        className="fs-6 buttonHover mb-1"
                        href="/category/smartphones"
                      >
                        Smartphones
                      </Nav.Link>
                      <Nav.Link
                        as={Link}
                        className="buttonHover mb-1 "
                        href="/category/laptops"
                      >
                        Laptops
                      </Nav.Link>
                      <Nav.Link
                        as={Link}
                        className="buttonHover mb-1 "
                        href="/category/fragrances"
                      >
                        Fragrances
                      </Nav.Link>
                      <Nav.Link
                        as={Link}
                        className="buttonHover mb-1 "
                        href="/category/skincare"
                      >
                        Skincare
                      </Nav.Link>
                      <Nav.Link
                        as={Link}
                        className="buttonHover mb-1 "
                        href="/category/groceries"
                      >
                        Groceries
                      </Nav.Link>
                      <Nav.Link
                        as={Link}
                        className="buttonHover mb-1 "
                        href="/category/decoration"
                      >
                        Home-decoration
                      </Nav.Link>
                      <Nav.Link
                        as={Link}
                        className="buttonHover mb-1 "
                        href="/category/furniture"
                      >
                        Furniture
                      </Nav.Link>
                      <Nav.Link
                        as={Link}
                        className="buttonHover mb-1 "
                        href="/category/tops"
                      >
                        Tops
                      </Nav.Link>
                      <Nav.Link
                        as={Link}
                        className="buttonHover mb-1 "
                        href="/category/womens-dresses"
                      >
                        Womens-dresses
                      </Nav.Link>
                      <Nav.Link
                        as={Link}
                        className="buttonHover mb-1 "
                        href="/category/womens-jewellery"
                      >
                        Womens-jewellery
                      </Nav.Link>
                      <Nav.Link
                        as={Link}
                        className="buttonHover mb-1 "
                        href="/category/womens-bags"
                      >
                        Womens-bags
                      </Nav.Link>
                      <Nav.Link
                        as={Link}
                        className="buttonHover mb-1 "
                        href="/category/womens-shoes"
                      >
                        Womens-shoes
                      </Nav.Link>
                      <Nav.Link
                        as={Link}
                        className="buttonHover mb-1 "
                        href="/category/sunglasses"
                      >
                        Sunglasses
                      </Nav.Link>
                      <Nav.Link
                        as={Link}
                        className="buttonHover mb-1 "
                        href="/category/mens-shoes"
                      >
                        Mens-shoes
                      </Nav.Link>
                      <Nav.Link
                        as={Link}
                        className="buttonHover mb-1 "
                        href="/category/mens-watches"
                      >
                        Mens-watches
                      </Nav.Link>
                      <Nav.Link
                        as={Link}
                        className="buttonHover mb-1 "
                        href="/category/mens-shirts"
                      >
                        Mens-shirts
                      </Nav.Link>
                      <Nav.Link
                        as={Link}
                        className="buttonHover mb-1 "
                        href="/category/automotive"
                      >
                        Automotive
                      </Nav.Link>
                      <Nav.Link
                        as={Link}
                        className="buttonHover mb-1 "
                        href="/category/motorcycle"
                      >
                        Motorcycle
                      </Nav.Link>
                      <Nav.Link
                        as={Link}
                        className="buttonHover mb-1 "
                        href="/category/lighting"
                      >
                        Lighting
                      </Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
              <FaShoppingBag className="fs-2  me-2" />

              <Link className="text-decoration-none text-white fs-3 " href="/">
                Goo-Market
              </Link>
            </div>

            <Navbar.Toggle
              className=" position-absolute end-0 me-4 "
              aria-controls="navbarScroll"
            />
          </div>
          <Navbar.Collapse id="navbarScroll">
            <div className="w-100 ms-4">
              <Form className=" d-flex">
                <Form.Control
                  value={words}
                  onChange={(e) => setWords(e.target.value)}
                  type="search"
                  placeholder="Tybe here.."
                  className="text-white bg-transparent me-2"
                  aria-label="Search"
                />
                <Button
                  disabled={!words && true}
                  onClick={() => searchFunc()}
                  variant="success"
                >
                  <Link
                    className="text-white text-decoration-none"
                    href="/search"
                  >
                    {" "}
                    Search
                  </Link>
                </Button>
              </Form>
              <Nav className=" me-auto my-2 my-lg-0">
                <Nav.Link
                  as={Link}
                  className="fs-6 text-white"
                  href="/category/smartphones"
                >
                  Smartphones
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="text-white "
                  href="/category/laptops"
                >
                  Laptops
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="text-white "
                  href="/category/fragrances"
                >
                  Fragrances
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="text-white "
                  href="/category/skincare"
                >
                  Skincare
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="text-white "
                  href="/category/groceries"
                >
                  Groceries
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="text-white "
                  href="/category/decoration"
                >
                  Home-decoration
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="text-white "
                  href="/category/furniture"
                >
                  Furniture
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="text-white "
                  href="/category/tops"
                >
                  Tops
                </Nav.Link>
              </Nav>
            </div>
            <div className="ms-4">
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip className=" border border-success rounded-3 bg-white text-center mt-3">
                    <div>
                      <p
                        style={{ fontFamily: "auto" }}
                        className="shadow fs-6 fw-bold py-3 border-2 border-bottom text-success border-success "
                      >
                        Recenlty Added Products
                      </p>
                      {countProduts.length === 0 ? (
                        <div className=" d-flex flex-column align-items-center py-2">
                          <img
                            width={"130em"}
                            src="https://goomarket.vercel.app/assets/shopping_cart-b0846037.png"
                          />
                          <p>No Products Yet!</p>
                          <button
                            style={{ fontSize: "smaller" }}
                            className="btn btn-success fw-bold"
                          >
                            <Link
                              className="text-white text-decoration-none"
                              href="/"
                            >
                              GO SHOOPING NOW!
                            </Link>
                          </button>{" "}
                        </div>
                      ) : (
                        <div className="px-3">
                          {countProduts.map((product) => (
                            <div
                              key={product.id}
                              className="d-flex align-items-start justify-content-between gap-2 mb-4 border-bottom border-2"
                            >
                              <img
                                className="rounded-1"
                                style={{ width: "20%" }}
                                src={product.thumbnail}
                              />
                              <p style={{ fontSize: "smaller" }}>
                                {product.title}
                              </p>
                              <p style={{ fontSize: "smaller" }}>
                                EGP{" "}
                                {Math.ceil(
                                  product.price -
                                    (product.price *
                                      product.discountPercentage) /
                                      100
                                )}
                              </p>
                            </div>
                          ))}
                          <button className="btn btn-success">
                            <Link
                              style={{ fontSize: "small" }}
                              className="text-white text-decoration-none"
                              href="/carts"
                            >
                              {" "}
                              VIEW
                            </Link>
                          </button>
                        </div>
                      )}
                    </div>
                  </Tooltip>
                }
              >
                {({ ref, ...triggerHandler }) => (
                  <div
                    {...triggerHandler}
                    className="d-inline-flex align-items-center"
                  >
                    <h6
                      ref={ref}
                      className="position-absolute ms-4 bg-white p-2 rounded-circle"
                      style={{ marginTop: "-2em", fontSize: "small" }}
                    >
                      {countProduts.length}
                    </h6>
                    <Link href="/carts">
                      {" "}
                      <TiShoppingCart className=" position-relative text-white fs-1 " />
                    </Link>
                  </div>
                )}
              </OverlayTrigger>
            </div>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}
