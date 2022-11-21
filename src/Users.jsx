import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState([false]);

  useEffect(() => {
    loadData();
  }, []);

  let loadData = async () => {
    setLoading(true);
    let users = await axios.get(
      "https://6283ca4a38279cef71dc6090.mockapi.io/users"
    );
    setUsers(users.data);
    setLoading(false);
  };

  let userDelete = async (userid) => {
    try {
      let ask = window.confirm("Please Confirm Delete ?");
      if (ask) {
        await axios.delete(
          `https://6283ca4a38279cef71dc6090.mockapi.io/users/${userid}`
        );
        loadData();
      }
    } catch (error) {}
  };

  return (
    <div class="container-fluid">
      {/* <!-- Page Heading --> */}
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Users</h1>
        <Link
          to="/portal/createuser"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Create User
        </Link>
      </div>

      {isLoading ? (
        <div className="mx-auto" style={{ width: "200px" }}>
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">User Details</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>#S.No</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Startdate</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Startdate</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {users.map((users, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{users.name}</td>
                        <td>{users.position}</td>
                        <td>{users.office}</td>
                        <td>{users.age}</td>
                        <td>{users.startdate}</td>
                        <td>${users.salary}</td>
                        <td>
                          <Link
                            to={`/portal/users/${users.id}`}
                            className="btn btn-sm btn-warning mr-2"
                          >
                            View
                          </Link>
                          <Link
                            to={`/portal/users/edit/${users.id}`}
                            className="btn btn-sm btn-primary mr-2"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => userDelete(users.id)}
                            className="btn btn-sm btn-danger mr-2"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* <!-- DataTales Example --> */}
    </div>
  );
}

export default Users;
