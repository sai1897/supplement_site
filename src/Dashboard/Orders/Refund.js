import React from "react";
import Popup from './Popup'
import Navbar from "/home/cogncise/React/suppliment/src/Screens/Navbar.js";
import Menu from "/home/cogncise/React/suppliment/src/Screens/Menu.js";
import "/home/cogncise/React/suppliment/src/App.css";

import { Button, Modal, ModalBody, ModalHeader, Row, Col } from "reactstrap";

const Upcomming=()=>{
    return(
        <div>
        <Navbar />
        <div className="row h d-flex">
          <div className="col-2">
            <Menu />
          </div>
          <div className="col-10 ">
            {/* table */}
            <div className="row  d-flex w-50 ">
              <button
                className="btn btn-secondary  btn-lg mt-3"
                type="button"
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  backgroundColor: "#1CE45F",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                <a href="#">Return Policy</a>
              </button>
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
                    <th scope="col">Order Date</th>
                    <th scope="col">Order ID</th>
                    <th scope="col">Product ID</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Agent Name</th>
                    <th scope="col">Total</th>
                    <th scope="col">Status</th>
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
                    <th scope="col">
                      <input type="text" placeholder="search" />
                    </th>
                    <th scope="col">
                      <input type="text" placeholder="search" />
                    </th>
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
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>



          
        </div>
        </div>

    )
}
export default Upcomming