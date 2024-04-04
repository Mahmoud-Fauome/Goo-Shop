"use client";
import React from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import { PropagateLoader } from "react-spinners";

const Page = () => {
  const { searchWord, searchWordLoad } = useSelector((state) => state.search);

  return (
    <div>
      {searchWordLoad ? (
        <div style={{ padding: "5.8em" }}>
          <PropagateLoader color="#36d7b7" className="text-center my-5 py-5" />
        </div>
      ) : (
        <div>
          {searchWord.length > 0 ? (
            <div>
              <h4 className="border-start border-success border-4 mx-4 fw-bold text-secondary bg-secondary-subtle shadow p-4">
                SEARCH RESULTS:
              </h4>
              <div className="d-flex flex-wrap justify-content-center mt-5">
                {searchWord.map((word, index) => (
                  <Card
                    key={index}
                    className="position-relative shadow text-center mx-2"
                    style={{ width: "17.5rem", marginBottom: "4em" }}
                  >
                    <p
                      className="position-absolute shadow mt-4 px-4 p-2 fw-bold bg-success text-white"
                      style={{ marginLeft: "-2px" }}
                    >
                      {word.category}
                    </p>
                    <Card.Img
                      className="mb-2 shadow object-fit-cover"
                      style={{ height: "20rem" }}
                      variant="top"
                      src={word.images[0]}
                    />
                    <Card.Body>
                      <Card.Title className="fs-6 fw-bold">
                        Brand {word.brand}
                      </Card.Title>
                      <hr />
                      <Card.Text className="text-secondary">
                        {word.title}
                      </Card.Text>
                      <div className=" d-flex justify-content-center ">
                        <Card.Text className="text-secondary fs-6 me-2 text-decoration-line-through">
                          EGP {word.price}
                        </Card.Text>
                        <Card.Text className="border-bottom border-success text-dark-emphasis fs-6 fw-bold me-2">
                          EGP{" "}
                          {Math.ceil(
                            word.price -
                              (word.price * word.discountPercentage) / 100
                          )}
                        </Card.Text>
                        <Card.Text className="fs-6 text-success">
                          (%off)
                        </Card.Text>
                      </div>
                      <Button
                        variant="success"
                        className="hov  bg-secondary-subtle fw-bold text-black border-0 w-100"
                        style={{ fontSize: "smaller" }}
                      >
                        <Link
                          className="text-decoration-none text-black"
                          href={`/productdetails/${word.id}`}
                        >
                          {" "}
                          SHOW DETAILS
                        </Link>
                      </Button>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <h3
              className="text-success text-center h-100 fw-bold"
              style={{ marginTop: "8.8em", marginBottom: "18.7em" }}
            >
              Sorry, No Products Found!
            </h3>
          )}
        </div>
      )}
    </div>
  );
};
export default Page;
