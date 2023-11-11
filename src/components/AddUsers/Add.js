import React, { useState, useContext } from "react";
import { ThemeContext } from "../../App";
import { Link } from "react-router-dom";
import "../../styleCss/Add.css";

function Add() {
  const { addUser } = useContext(ThemeContext);
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  function yourName(e) {
    let name = e.target.value;
    setName(name);
    setShow(!show);
  }

  function yourImage(e) {
    let image = URL.createObjectURL(e.target.files[0]);
    setImg(image);
    setShow(!show);
  }

  return (
    <div className="containerAddInputs">
      <p className="nameInputs">Add Your Name</p>
      <input
        className="inputName"
        placeholder="write your Name"
        onChange={(e) => yourName(e)}
      />
      <p className="nameInputs">Add Your Image</p>
      <input type="file" onChange={yourImage} />
      <img className="imgAdd" src={img} alt="imageNew" />
      {name === "" || img === "" ? null : (
        <Link to="/">
          <button className="btnAdd" onClick={() => addUser(name, img)}>
            הוספה
          </button>
        </Link>
      )}
    </div>
  );
}

export default Add;
