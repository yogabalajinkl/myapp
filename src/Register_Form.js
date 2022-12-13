import React from "react";
import SimpleReactValidator from "simple-react-validator";
import axios from "axios";

class RegisterForm extends React.Component {

  constructor(Props) {
    super(Props);
    this.validator = new SimpleReactValidator();

    this.state = {
      objecthandle: {
        firstname: "",
        lastname: "",
        email: "",
        number: "",
        dob: "",
        password: "",
      },
    };
  }


  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      objecthandle: { ...this.state.objecthandle, [name]: value },
    });
  };

  handleSubmit = async () => {
    if (this.validator.allValid()) {
       axios
       .post("http://localhost:4000/post", this.state.objecthandle)
       .then(()=> console.log(this.state.objecthandle))
       .catch(err=>{
        console.error(err);
       })
       
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };
  render() {
    return (
      <form className="container card">
        <h4 className="text-center text-success">Register</h4>
        <div className="row">
          <div className="col-6">
            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              value={this.state.objecthandle.firstname}
              className="form-control"
              placeholder="First Name"
              onChange={this.handleChange}
            />
            <div className="mb">
              {" "}
              {this.validator.message(
                "firstname",
                this.state.objecthandle.firstname,
                "required"
              )}
            </div>
          </div>
          <div className="col-6">
            <label>Last Name</label>
            <input
              type="name"
              name="lastname"
              className="form-control"
              value={this.state.objecthandle.lastname}
              placeholder="Last Name"
              onChange={this.handleChange}
            />
            <div className="mb">
              {this.validator.message(
                "lastname",
                this.state.objecthandle.lastname,
                "required"
              )}
            </div>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-6">
            <label>Number</label>
            <input
              type="number"
              name="number"
              className="form-control"
              placeholder="+91   "
              value={this.state.objecthandle.number}
              onChange={this.handleChange}
            />
            {/* <PhoneInput
                                      className='phone'
                                      placeholder="Enter phone number"
                                      value={value}
                                      onChange={setValue} /> */}
            <div className="mb">
              {" "}
              {this.validator.message(
                "Number",
                this.state.objecthandle.number,
                "required"
              )}
            </div>
          </div>
          <div className="col-6">
            <label>Date</label>
            <input
              type="date"
              name="dob"
              value={this.state.objecthandle.name}
              className="form-control"
              placeholder="Date"
              onChange={this.handleChange}
            />
            <div className="mb">
              {" "}
              {this.validator.message(
                "Dob",
                this.state.objecthandle.dob,
                "required"
              )}
            </div>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-12 ">
            <label className="form-label ">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control "
              placeholder="Email address"
              value={this.state.objecthandle.email}
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
        </div>
        <br></br>
        <div className="row">
          <div className="col-12">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={this.state.objecthandle.password}
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
        </div>
        <br></br>
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
    );
  }
}

export default RegisterForm;
