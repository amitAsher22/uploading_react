import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import { Link } from "react-router-dom";
import "../../styleCss/user.css";

function Users({ user, index }) {
  const { deleteUser, update } = useContext(ThemeContext);
  return (
    <div key={index}>
      {
        <div className="DadDivOfUsers">
          <div className="divOfImag">
            <img
              style={{ width: "100%", height: "100%" }}
              src={user.img}
              alt={user.userName}
            />
          </div>
          <p className="titleCard">{user.userName}</p>
          <div className="btnGroup">
            <button className="buttonUse" onClick={() => deleteUser(index)}>
              Delete
            </button>
            <Link to={`/update/${index}`}>
              <button className="buttonUse" onClick={() => update()}>
                Update{" "}
              </button>
            </Link>
          </div>
        </div>
      }
    </div>
  );
}

export default Users;
