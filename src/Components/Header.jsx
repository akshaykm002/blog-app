import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      className="postion-fixed top-0 w-100 d-flex justify-content-between"
      style={{ backgroundColor: "black", height: "80px" }}
    >
      <div >
        {" "}
        <Link to={"/"} style={{ textDecoration: "none" }}>
        <h1 style={{cursor:"pointer"}} className="ms-5 mt-3 text-light">
          {" "}
          <i class="fa-solid fa-blog"></i>{" "}My Blog
        </h1>
        </Link>
       
      </div>
      <div className="d-flex">
        <Link to={"/login"} style={{textDecoration:"none"}}>
      <h4 className="ms-5 mt-4 text-secondary align-items-center"style={{cursor:"pointer"}}>Login</h4>

        </Link>
        <Link to={"/register"} style={{textDecoration:"none"}}>
      <h4 className="ms-5 me-5 mt-4 text-secondary align-items-center"style={{cursor:"pointer"}}>Register</h4>


        </Link>

      </div>

    </div>
  );
}

export default Header;
