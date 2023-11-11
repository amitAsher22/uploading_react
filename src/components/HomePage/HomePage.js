import "../../styleCss/HomePage.css";
import React, { useContext } from "react";
import { ThemeContext } from "../../App.js";
import { Link } from "react-router-dom";
import Users from "../Users/Users.js";

function HomePage() {
  const { data } = useContext(ThemeContext);

  return (
    <div className="main_container">
      <div>
        <Link to="/add">
          <button className="btn_Add">Add Users</button>
        </Link>
      </div>
      <div className="Second_div_of_users">
        {data.map((user, index) => {
          return <Users user={user} index={index} />;
        })}
      </div>
    </div>
  );
}

export default HomePage;
