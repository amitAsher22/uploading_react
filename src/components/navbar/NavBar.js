import React from "react";
import "../../styleCss/Nav_bar.css";
import addImage from "../../images/add.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="containerNavBar">
      <h1>Uploading Images React </h1>
      <Link to="/">
        <img src={addImage} alt="add" style={{ width: "60%", height: "30%" }} />
      </Link>
    </div>
  );
}

export default NavBar;
