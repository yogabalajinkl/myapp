import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
        <nav className=" container-fluid navbar navbar-expand-lg navbar-light bg-success mb-5">
        <div className="container-fluid text-white">
          <h3>My Project</h3>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto  mb-2 mb-lg-0 " >
              <li className="nav-item  ">
                <Link className="nav-link active   text-white"  aria-current="page" to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white"  aria-current="page" to="/log" >login</Link>
              </li>
             
            </ul>
         
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
