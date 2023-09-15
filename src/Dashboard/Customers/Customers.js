import React from "react";
import Navbar from "/home/cogncise/React/suppliment/src/Screens/Navbar.js";
import Menu from "/home/cogncise/React/suppliment/src/Screens/Menu.js";
import "/home/cogncise/React/suppliment/src/App.css";
import Popupnew from "./Popupnew";
import Search from "./Search";
import { useNavigate } from "react-router-dom";


export default function Customers() {
  const navigate = useNavigate();

  const Navigateone=()=>{
    navigate("/search")

  }
  return (
    <div className="h container-fluid">
      <Navbar />

      <div className="row h-100 mt-4">
        <div className=" col-sm-2">
          <Menu />
        </div>
        <div className="col-sm-10 h-100 ">
          <div className="row h-50 ">
            <div
              className="container-fluid mt-2 pb-2 "
              style={{ backgroundColor: "#E2E0E0", width: 500, height: 417 }}
            >
              {/* <div className="row d-flex justify-content-center align-items-center text-center mb-3">
                <h5 className="bg-info mt-4" >Customer ID </h5>
                <input
                  class="form-control  w-50 mt-4"
                  type="text"
                  placeholder="Default input"
                  style={{marginLeft:48}}
                 
                />
              </div> */}
                <div className="row d-flex justify-content-center align-items-center text-center">
                <h5  className="m-4">CustomerId</h5>
                <input
                  class="form-control  inputc  ml-3 w-50"
                  type="text"
                  placeholder="Default input"
                />
              </div>
              <div className="row d-flex justify-content-center align-items-center text-center">
                <h5  className="m-4">First Name</h5>
                <input
                  class="form-control  inputc  ml-3 w-50"
                  type="text"
                  placeholder="Default input"
                />
              </div>
              <div className="row d-flex justify-content-center align-items-center text-center">
                <h5  className="m-4">Last Name</h5>
                <input
                  class="form-control ml-3 w-50"
                  type="text"
                  placeholder="Default input"
                />
              </div>
              <div className="row d-flex justify-content-center align-items-center text-center">
                <h5  className="m-4">Phone No.</h5>
                <input
                  class="form-control ml-3 w-50"
                  type="text"
                  placeholder="Default input"
                />
              </div>
              <div className="row d-flex justify-content-center align-items-center text-center">
                <h5  className="m-4">Post Code</h5>
                <input
                  class="form-control ml-3 w-50"
                  type="text"
                  placeholder="Default input"
                />
              </div>

              <div className="row d-flex justify-content-center align-items-center ">
                <button
                  type="button"
                  class="btn  m-1 mr-4"
                  style={{ backgroundColor: "#1CE45F", color: "white" }}
                  onClick={()=>{Navigateone()}}
                >
                  Search
                </button>

                <Popupnew />
              </div>
            </div>
          </div>
          <div className="row h-50 ">
            <div className="row  h-100 d-flex justify-content-center text-center ">
          <div className="row  h-60 justify-content-center text-center" >
          <table className="table  table-bordered table-sm " style={{marginTop:"3rem", }}>
        <thead  >
          <tr>
            <th scope="col-5"></th>
            <th scope="col">
            <div class="dropdown">
  <button style={{fontWeight:"bold",fontSize:20}} class="btn  w-100 th" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Order_id  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="/quotes">Quotes</a>
  </div>
</div>
            </th>
            <th scope="col">Customer ID</th>
            <th scope="col">Name</th>
            <th scope="col">Phone No.</th>
            <th scope="col">Address</th>
            <th scope="col">Post Code</th>
            <th scope="col">Date</th>

            <th scope="col" style={{width:100}}>Agent Name</th>


          </tr>
          <tr>
             <th scope="col-5">ID</th>
            <th scope="col"><input type="text" placeholder="search"/></th>
            <th scope="col"><input type="text" placeholder="search"/></th>
            <th scope="col"><input type="text" placeholder="search"/></th>
            <th scope="col"><input type="text" placeholder="search"/></th>
            <th scope="col"><input type="text" placeholder="search"/></th>
            <th scope="col"><input type="text" placeholder="search"/></th>
            <th scope="col"><input type="text" placeholder="search"/></th>
            <th scope="col"><input type="text"  style={{width:100}} placeholder="search"/></th>



            <th scope="col"></th>
          </tr>
         
        </thead>
        <tbody>
          <tr >
            <th scope="row">1</th>
            <td>12455</td>
            <td>1448-9-1997</td>
            <td>test</td>
            <td>Test</td>
            <td>rrrr</td>
            <td>44</td>

            <td>paid</td>
            <td>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            
            <td></td>

            <td></td>

            <td>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>

            <td>
            </td>
          </tr>
        </tbody>
      </table>
          </div>
          </div>

            </div>
          </div>
        </div>
      </div>
  );
}
