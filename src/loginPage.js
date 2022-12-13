import React from "react";

const LoginPage = ({ usersData }) => {
  return (
    <div className="container">
      <table className=" table table-bordered border-success">
        <thead>
          <tr>
            <th scope="col">1</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Number</th>
            <th scope="col">Dob</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{usersData.firstname}</td>
            <td>{usersData.lastname}</td>
            <td>{usersData.email}</td>
            <td>{usersData.number}</td>
            <td>{usersData.dob}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LoginPage;
