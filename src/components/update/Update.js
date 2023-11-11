import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { ThemeContext } from "../../App.js";
import { useParams } from "react-router-dom";
import "../../styleCss/update.css";

function Update() {
  const { update } = useContext(ThemeContext);
  const { id } = useParams();
  const [nameUpdate, setNameUpdate] = useState("");
  const [imageUpdate, setImageUpdate] = useState("");

  function updateImage(e) {
    let image = URL.createObjectURL(e.target.files[0]);
    setImageUpdate(image);
  }

  return (
    <div className="updateMaindiv">
      <div className="divOfData">
        <label className="titleOfUpdate">Choose Your Name </label>
        <input
          placeholder="type your name"
          onChange={(e) => setNameUpdate(e.target.value)}
          className="inputUpdate"
        />

        <label className="titleOfUpdate">Choose Your Image</label>
        <input
          type="file"
          placeholder="type your image"
          onChange={updateImage}
        />
        <div>
          <div className="imgLogos">
            <img src={imageUpdate} alt="logo" style={{ width: "100%" }} />
          </div>
        </div>
        <Link to="/">
          <button
            className="updateBtnReall"
            onClick={() => update(id, nameUpdate, imageUpdate)}
          >
            update
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Update;
