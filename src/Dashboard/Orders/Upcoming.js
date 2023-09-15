import React from "react";
import Popup from './Popup'
import Navbar from "/home/cogncise/React/suppliment/src/Screens/Navbar.js";
import Menu from "/home/cogncise/React/suppliment/src/Screens/Menu.js";
import "/home/cogncise/React/suppliment/src/App.css";

const Upcoming=()=>{
  return (
    <div>
         <Navbar />
      <div className="row h d-flex">
        <div className="col-2">
          <Menu />
        </div>
        <div className="col-10">
        <div className="row h-10 d-flex justify-content-start align-items-center " style={{color:"#0FA958",fontWeight:600,fontSize:64,fontFamily:"serif"}}>
        Upcoming Orders          
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
                  <th scope="col">Order Date</th>
                  <th scope="col">Order ID</th>
                  <th scope="col">Product ID</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Dispatch Date</th>
                  <th scope="col">Address</th>
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
                  <td></td>Refund
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

export default Upcoming
