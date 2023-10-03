import React from "react";
import Navbar from "/home/cogncise/React/suppliment/src/Screens/Navbar.js";
import Menu from "/home/cogncise/React/suppliment/src/Screens/Menu.js"
import Userpopup from "/home/cogncise/React/suppliment/src/Screens/Userpopup.js";
import "/home/cogncise/React/suppliment/src/App.css";

import { Button, Modal, ModalBody, ModalHeader, Row, Col } from "reactstrap";

export default function Umanagement() {
  return (
    <>
      <Navbar />
      <div className="row h">
        <div className="col-3">
          <Menu />
        </div>
        <div className="col-9 ">
          <div className="d-flex">
            <div className="col-6  "
            style={{
              padding:50
            }}>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle btn-lg"
                  type="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    display:"block",
                    marginLeft:"auto",
                    marginRight:"auto",
                    backgroundColor:"white",
                    color:"black"
                  }}
                >
                  Filter Users
                </button>
                <div className="dropdown-menu ">
                  <a className="dropdown-item" href="#">
                    Team Manager
                  </a>
                  <a className="dropdown-item" href="#">
                    Agent
                  </a>
                  <a className="dropdown-item" href="#">
                    Customer Care
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 " 
            
            >
              <Userpopup />
            </div>
          </div>
          {/* table */}
          <div className="row  ">
            <table
              className="table  table-bordered"
              style={{
                marginTop: "8rem",
                marginLeft: "3rem",
                marginRight: "3rem",
              }}
            >
              <thead>
                <tr>
                  <th scope="col-5"></th>
                  <th scope="col">Name</th>
                  <th scope="col">Username</th>
                  <th scope="col">Phone no.</th>
                  <th scope="col">Role</th>
                  <th scope="col">Reporting To</th>
                  <th scope="col">Action.</th>
                </tr>
                <tr>
                  <th scope="col-5">ID</th>
                  <th scope="col">
                    <input type="text" placeholder="search" />
                  </th>
                  <th scope="col">
                    <input type="text" placeholder="search" />
                  </th>
                  <th scope="col">
                    <input type="text" placeholder="search" />
                  </th>
                  <th scope="col">
                    <input type="text" placeholder="search" />
                  </th>
                  <th scope="col">
                    <input type="text" placeholder="search" />
                  </th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td></td>
                  <td></td>
                  <td>
                    <button type="button" class="btn btn-primary ">
                      Edit
                    </button>
                    <button type="button" class="btn btn-danger ">
                      De Activate
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td></td>
                  <td></td>
                  <td>
                    <button type="button" class="btn btn-primary">
                      Edit
                    </button>
                    <button type="button" class="btn btn-danger">
                      De Activate
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td></td>
                  <td></td>
                  <td>
                    <button type="button" class="btn btn-primary">
                      Edit
                    </button>
                    <button type="button" class="btn btn-danger">
                      De Activate
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
