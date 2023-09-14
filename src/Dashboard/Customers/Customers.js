
import React from "react";
import Navbar from "/home/cogncise/React/suppliment/src/Screens/Navbar.js";
import Menu from "/home/cogncise/React/suppliment/src/Screens/Menu.js";
import "/home/cogncise/React/suppliment/src/App.css";
export default function Customers() {
  return (
    <div className="h container-fluid">
      <Navbar />
      <div className="row h-100 mt-4">
        <div className=" col-sm-2">
          <Menu />
        </div>
        <div className="col-sm-10 ">
          <div className="row h-50  d-flex justify-content-center text-center align-items-center ">
            <div className="col-sm-6  border-3 d-flex justify-content-center " style={{ width: 713 ,height:500,backgroundColor:'#E2E0E0'}}>
              <form>
                <div className="form-group d-flex  flex-row align-items-center text-center m-auto">
                  <label for="Customer_ID  ">Customer_ID</label>
                  <input
                    type=""
                    class="form-control m-3 "
                    id="Customer_ID"
                    aria-describedby="emailHelp"
                    placeholder="Enter Customer Id"
                    style={{ width: 333, height: 42 }}
                  />
                </div>
                <div className="form-group d-flex flex-row align-items-center text-center  m-auto">
                  <label  className="ml-3" for="First Name">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control m-3"
                    id="First_Name"
                    placeholder="First Name"
                    style={{ width: 333, height: 42 }}
                  />
                </div>
                <div className="form-group d-flex flex-row align-items-center text-center  m-auto">
                  <label  className="ml-3" for="Last Name" >
                    Last Name
                  </label>
                  <input
                    type="text"
                    class="form-control m-3"
                    id="Last_Name"
                    aria-describedby="emailHelp"
                    placeholder="Last Name"
                    style={{ width: 333, height: 42 }}
                  />
                </div>
                <div className="form-group d-flex flex-row align-items-center text-center  m-auto">
                  <label  className="ml-3" for="Phone_No">
                    Phone No.
                  </label>
                  <input
                    type="text"
                    class="form-control m-3"
                    id="Phone_No"
                    aria-describedby="emailHelp"
                    placeholder="Phone No."
                    style={{ width: 333, height: 42 }}
                  />
                </div>
                <div className="form-group d-flex flex-row align-items-center text-center  m-auto">
                  <label  className="ml-3" for="Postcode" >
                    Post Code
                  </label>
                  <input
                    type="text"
                    class="form-control m-3"
                    id="Postcode"
                    aria-describedby="emailHelp"
                    placeholder="PostCode"
                    style={{ width: 333, height: 42 }}
                  />
                </div>
                <div className="d-flex flex-row  justify-content-center  ">
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{
                        width: 110,
                        background: "#1CE45F",
                        border: "none",
                        color: "#000",
                        fontFamily: "sans-serif",
                        fontWeight: 600,
                        fontSize: 24,
                      }}
                    >
                      Search
                    </button>
                  </div>
                  <div className="ml-4 mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{
                        width: 250,
                        background: "#1CE45F",
                        border: "none",
                        color: "#000",
                        fontFamily: "sans-serif",
                        fontWeight: 600,
                        fontSize: 24,
                      }}
                    >
                      Add Customer
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="row  h-50 d-flex justify-content-center text-center align-items-center ">
          <div className="row  h-60">
          <table className="table  table-bordered" style={{marginTop:"3rem",marginLeft:"3rem",marginRight:"3rem" }}>
        <thead  >
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
            <th scope="col"><input type="text" placeholder="search"/></th>
            <th scope="col"><input type="text" placeholder="search"/></th>
            <th scope="col"><input type="text" placeholder="search"/></th>
            <th scope="col"><input type="text" placeholder="search"/></th>
            <th scope="col"><input type="text" placeholder="search"/></th>
            <th scope="col"></th>
          </tr>
         
        </thead>
        <tbody>
          <tr >
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td></td>
            <td></td>
            <td>
              <button type="button" class="btn btn-primary " >Edit</button>
              <button type="button" class="btn btn-danger ">De Activate</button>
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
            <button type="button" class="btn btn-primary">Edit</button>
              <button type="button" class="btn btn-danger">De Activate</button>
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
            <button type="button" class="btn btn-primary">Edit</button>
              <button type="button" class="btn btn-danger">De Activate</button>
            </td>
          </tr>
        </tbody>
      </table>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
