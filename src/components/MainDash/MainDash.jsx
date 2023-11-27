import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
import RightSide from "../RigtSide/RightSide";
import "./../RigtSide/RightSide.css"
const MainDash = () => {
  return (
    <><div className="MainDash">
      {/* <div className="dashboard"> */}
      <h1>Dashboard</h1>
      <Cards />
      <Table />
      {/* </div> */}
      {/* <RightSide/> */}
    </div><RightSide /></>
  );
};

export default MainDash;
