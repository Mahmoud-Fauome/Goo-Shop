"use client";
import React from "react";
import { Provider } from "react-redux";
import warehouse from "./Store";
const Provid = ({ children }) => {
  return <Provider store={warehouse}>{children}</Provider>;
};

export default Provid;
