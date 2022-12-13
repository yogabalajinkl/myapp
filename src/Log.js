import React from "react";
import SimpleReactValidator from "simple-react-validator";
import axios from "axios";
import LoginPage from "./loginPage";

class Log extends React.Component {
  constructor(Props) {
    super(Props);
    this.validator = new SimpleReactValidator();

    this.userData = {};
    this.state = {
      objecthandle: {
        email: "",
        password: "",
      },
    };
  }

  loadData = false;

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      objecthandle: { ...this.state.objecthandle, [name]: value },
    });
  };

  handleSubmit = async () => {
    if (this.validator.allValid()) {
      console.log(this.state.objecthandle);
      await axios
        .post("http://localhost:4000/login/", {
          email: this.state.objecthandle.email,
          password: this.state.objecthandle.password,
        })
        .then((data) => {
          this.setState(this.userData= data.data)
          console.log(this.userData);
        })
        .catch((err) => {
          console.error(err);
        });
      this.loadData = true;
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col card">
            <form>
              <h3 className="text-center text-success">Login</h3>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="text"
                  name="email"
                  value={this.state.objecthandle.email}
                  className="form-control"
                  placeholder="email"
                  onChange={this.handleChange}
                />
                <div className="mb  ">
                  {" "}
                  {this.validator.message(
                    "Email",
                    this.state.objecthandle.email,
                    "required"
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="text"
                  name="password"
                  value={this.state.objecthandle.password}
                  className="form-control"
                  placeholder="password"
                  onChange={this.handleChange}
                />
                <div className="mb">
                  {" "}
                  {this.validator.message(
                    "password",
                    this.state.objecthandle.password,
                    "required"
                  )}
                </div>
              </div>
              <div className="mb-3 form-check"></div>
              <div className="d-grid gap-2">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
            <br></br>
          </div>
          {
           this.loadData &&
              <LoginPage usersData={this.userData.data} />
          }
           
        </div>
      </div>
    );
  }
}

export default Log;
