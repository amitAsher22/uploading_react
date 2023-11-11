import NavBar from "./components/navbar/NavBar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.js";
import React, { useContext, createContext, useState } from "react";
import "../src/App.css";
import Add from "./components/AddUsers/Add.js";
import Update from "./components/update/Update.js";

export const ThemeContext = createContext(useContext);

function App() {
  const [data, setData] = useState([
    {
      userName: "amit",
      img: "https://www.w3schools.com/html/pic_trulli.jpg",
      id: 0,
    },
  ]);

  const addUser = (name, image, id) => {
    if (name === "" && image === "") {
      alert("YOU HAVE TO ADD NAME AND IMAGE");
    } else {
      setData((current) => [
        ...current,
        { userName: name, img: image, id: data.length - 1 + 1 },
      ]);
    }
  };

  const deleteUser = (id) => {
    const removeItem = data.splice(id, 1);
    const nameRemove = removeItem[0].userName;
    const resolt = data.filter((element) => element.userName !== nameRemove);
    setData(resolt);
  };

  const update = (id, name, image) => {
    setData(
      data.map((user) =>
        user.id === Number(id)
          ? {
              ...user,
              userName: name === "" ? user.userName : name,
              img: image === "" ? user.img : image,
            }
          : user
      )
    );
  };

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ data, addUser, deleteUser, update }}>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<Add />} />
            <Route path="/update/:id" element={<Update />} />
          </Routes>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
