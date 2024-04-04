"use client";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { funDeleteAll } from "@/ReduxSystem/DetailsSlice";
import { MdDelete } from "react-icons/md";
import Link from "next/link";

function Page() {
  const { addToCart } = useSelector((state) => state.productsDetails);
  const counts = new Set(addToCart);
  const details = [...counts];
  const prods = details.map((t) => {
    return { ...t, count: 1 };
  });
  const [countProduts, setCountProduts] = useState(prods);
  const dispatch = useDispatch();
  const increment = (product) => {
    const add = countProduts.map((prod) => {
      if (prod.id === product.id) {
        product.count++;
      }
      return prod;
    });
    setCountProduts(add);
  };
  const decrement = (product) => {
    const minus = countProduts.map((prod) => {
      if (prod.id === product.id) {
        product.count--;
      }
      return prod;
    });
    setCountProduts(minus);
  };
  const funDelete = (product) => {
    const del = countProduts.filter((prod) => {
      if (prod.id !== product.id) {
        return prod;
      }
    });
    setCountProduts(del);
  };
  return (
    <div>
      {countProduts && countProduts.length > 0 ? (
        <div className="mx-4">
          <div className="overflow-auto">
            <Table
              bordered={false}
              style={{ width: "100%" }}
              className="text-center rounded-3 rounded-bottom"
              striped
              hover
            >
              <thead className="shadow ">
                <tr>
                  <th>S.N</th>
                  <th>Product</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              {countProduts.map((product, index) => (
                <tbody key={index}>
                  <tr>
                    <td>1</td>
                    <td>{product.title}</td>
                    <td>
                      {" "}
                      EGP{" "}
                      {Math.ceil(
                        product.price -
                          (product.price * product.discountPercentage) / 100
                      )}
                    </td>
                    <td className="d-flex justify-content-center bg-white align-items-baseline shadow-sm gap-1 py-1">
                      <button
                        disabled={product.count < 2 && true}
                        className="margin btn btn-success border-2  px-3 py-1"
                        onClick={() => decrement(product)}
                      >
                        -
                      </button>
                      <p className="margin border border-1 rounded-2 px-3 py-1">
                        {product.count}
                      </p>
                      <button
                        className="margin btn btn-success border-2  px-3 py-1"
                        onClick={() => increment(product)}
                      >
                        +
                      </button>
                    </td>
                    <td>
                      EGP{" "}
                      {Math.ceil(
                        product.price -
                          (product.price * product.discountPercentage) / 100
                      ) * product.count}
                    </td>
                    <td>
                      <button
                        onClick={() => funDelete(product)}
                        className="text-success fw-bold border-0"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </div>
          <div
            style={{ marginBottom: "8em" }}
            className="d-flex justify-content-between bg-white shadow rounded-bottom-4 p-3 "
          >
            <div>
              {" "}
              <button
                onClick={() => dispatch(funDeleteAll(setCountProduts()))}
                className=" btn btn-outline-success fw-bold px-3 py-2"
              >
                <MdDelete className="me-1 mb-1" />
                CLEAR CART
              </button>
            </div>
            <div className="d-flex flex-column mb-3">
              <div className="d-flex align-items-center ">
                <p className="me-1">Total ({countProduts.length}) Items :</p>
                <p className="text-success fs-5 fw-bolder ">
                  EGP{" "}
                  {countProduts
                    .map(
                      (product) =>
                        Math.ceil(
                          product.price -
                            (product.price * product.discountPercentage) / 100
                        ) * product.count
                    )
                    .reduce((a, b) => a + b)}
                </p>
              </div>
              <button className=" btn btn-success">CHECK OUT</button>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{ height: "24em" }}
          className="d-flex align-items-center flex-column my-5"
        >
          <img
            style={{ width: "14em" }}
            src="https://goomarket.vercel.app/assets/shopping_cart-b0846037.png"
          />
          <p className="text-secondary">Your shopping cart is empty</p>
          <Link href="/">
            <button className="btn btn-success fw-bold">GO SHOPPING NOW</button>
          </Link>
        </div>
      )}
    </div>
  );
}
export default Page;
