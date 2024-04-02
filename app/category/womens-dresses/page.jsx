"use client";
import { useEffect } from "react";
import { getCategories } from "@/ReduxSystem/CategoriesSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import { PropagateLoader } from "react-spinners";

const Page = () => {
  const { categories, categoriesLoad } = useSelector(
    (state) => state.categoriesSlice
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories("womens-dresses"));
  }, []);
  return (
    <div>
      {categoriesLoad ? (
        <div className="my-4 py-5 my-5">
          <PropagateLoader color="#36d7b7" className="text-center my-5 py-5" />
        </div>
      ) : (
        <div>
          <h4 className="border-start border-success border-4 mx-4 fw-bold text-secondary bg-secondary-subtle shadow p-4">
            SEE OUR WOMENS-DRESSES
          </h4>
          <div className=" d-flex flex-wrap justify-content-center mt-5">
            {categories.map((womens, index) => (
              <Card
                key={index}
                className="position-relative shadow text-center mx-2"
                style={{ width: "17.5rem", marginBottom: "4em" }}
              >
                <p
                  className="position-absolute shadow mt-4 px-4 fw-bold bg-success p-2 text-white"
                  style={{ marginLeft: "-2px" }}
                >
                  {womens.category}
                </p>
                <Card.Img
                  className="mb-2 shadow object-fit-cover"
                  style={{ height: "20rem" }}
                  variant="womens"
                  src={womens.images[0]}
                />
                <Card.Body>
                  <Card.Title className="fs-6 fw-bold">
                    Brand {womens.brand}
                  </Card.Title>
                  <hr />
                  <Card.Text className="text-secondary">
                    {womens.title}
                  </Card.Text>
                  <div className=" d-flex justify-content-center ">
                    <Card.Text className="text-secondary fs-6 me-2 text-decoration-line-through">
                      EGP {womens.price}
                    </Card.Text>
                    <Card.Text className="border-bottom border-success text-dark-emphasis fs-6 fw-bold me-2">
                      EGP{" "}
                      {Math.ceil(
                        womens.price -
                          (womens.price * womens.discountPercentage) / 100
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
                      href={`/productdetails/${womens.id}`}
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
      )}
    </div>
  );
};
export default Page;
