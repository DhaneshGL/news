import React from "react";
import Fitness2 from "./img4.svg";
import Fitness1 from "./img2.svg";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <>
      <h1 className="w m1">News Hub</h1>
      <h4 className="w m1">Stay informed with diverse news sources.</h4>
      <div className="jc">  <Link className="btn btn-dark"  style={{ backgroundColor: '#1E1E1E',}} to="/general">
          News
        </Link></div>
      

      <div className="one jca">
        <img
          className="image img-fluid jca im s"
          src={Fitness1}
          alt="Fitness"
        />
        <img
          className="image img-fluid jca im s"
          src={Fitness2}
          alt="Fitness"
        />
      </div>
    </>
  );
};

export default Landing;
