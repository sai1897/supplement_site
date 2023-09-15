import React from "react";
import Navbar from "/home/cogncise/React/suppliment/src/Screens/Navbar.js";
import Menu from "/home/cogncise/React/suppliment/src/Screens/Menu.js";
import "/home/cogncise/React/suppliment/src/App.css";
import Popupnew from "./Popupnew";
const Search = () => {
  return (
    <div>
      <div className="h container-fluid">
        <Navbar />
        <div className="row ">
          <div className="col-sm-2">
          <Menu/>
          </div>

          <div className="col-sm-5  d-flex justify-content-center">
          

          <div
              style={{ backgroundColor: "#D9D9D9", width: 500,marginTop:30}}
            >
                <div style={{backgroundColor:"white"}}>
          <h5 style={{fontWeight:400,fontSize:32}}>Customer Details</h5>
          </div>

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
              <div className="row  m-2 d-flex justify-content-center align-items-center text-center">
                <h5  className="m-4">First Name</h5>
                <input
                  class="form-control  inputc  ml-3 w-50"
                  type="text"
                  placeholder="Default input"
                />
              </div>
              <div className="row m-2 d-flex justify-content-center align-items-center text-center">
                <h5  className="m-4">Middle Name:</h5>
                <input
                  class="form-control ml-3 w-50"
                  type="text"
                  placeholder="Default input"
                />
              </div>
              <div className="row  m-2 d-flex justify-content-center align-items-center text-center">
                <h5  className="m-4">Last Name:</h5>
                <input
                  class="form-control ml-3 w-50"
                  type="text"
                  placeholder="Default input"
                />
              </div>
              <div className="row m-2 d-flex justify-content-center align-items-center text-center">
                <h5  className="m-4">Email:</h5>
                <input
                  class="form-control ml-3 w-50"
                  type="text"
                  placeholder="Default input"
                />
              </div>
              <div className="row  m-2 d-flex justify-content-center align-items-center text-center">
                <h5  className="m-4">Phone No:</h5>
                <input
                  class="form-control ml-3 w-50"
                  type="text"
                  placeholder="Default input"
                />
              </div> <div className="row  m-2 d-flex justify-content-center align-items-center text-center">
                <h5  className="m-4">Landline No:</h5>
                <input
                  class="form-control ml-3 w-50"
                  type="text"
                  placeholder="Default input"
                />
              </div> <div className="row m-2 d-flex justify-content-center align-items-center text-center">
                <h5  className="m-4">Address 1</h5>
                <input
                  class="form-control ml-3 w-50"
                  type="text"
                  placeholder="Default input"
                />
              </div> <div className="row m-2 d-flex justify-content-center align-items-center text-center">
                <h5  className="m-4">Address 2</h5>
                <input
                  class="form-control ml-3 w-50"
                  type="text"
                  placeholder="Default input"
                />
              </div> <div className="row  m-2 d-flex justify-content-center align-items-center text-center">
                <h5  className="m-4">Town/City</h5>
                <input
                  class="form-control ml-3 w-50"
                  type="text"
                  placeholder="Default input"
                />
              </div> <div className="row  m-2 d-flex justify-content-center align-items-center text-center">
                <h5  className="m-4">Country</h5>
                <input
                  class="form-control ml-3 w-50"
                  type="text"
                  placeholder="Default input"
                />
              </div> <div className="row  m-2 d-flex justify-content-center align-items-center text-center">
                <h5  className="m-4">Post Code:</h5>
                <input
                  class="form-control ml-3 w-50"
                  type="text"
                  placeholder="Default input"
                />
              </div> <div className="row m-2 d-flex justify-content-center align-items-center text-center">
                <h5  className="m-4">Remark:</h5>
                <input
                  class="form-control ml-3 w-50"
                  type="text"
                  placeholder="Default input"
                />
              </div>
              <div class="form-check" style={{marginLeft:59}}>
    <input type="checkbox" style={{backgroundColor:"#D9D9D9"}} class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1" >Do not call</label>
  </div>

              <div className="row d-flex justify-content-center align-items-center ">
                <button
                  type="button"
                  class="btn  m-1 mr-4 mt-3 mb-2"
                  style={{ backgroundColor: "#1CE45F", color: "white",width:200,height:50 ,fontWeight:600,fontSize:30}}
                >
                  Update
                </button>

              </div>
            </div>
          </div>
          <div  className="col-sm-5 bg-warning">
            <div className="row h-50 bg-primary d-flex justify-content-center align-items-center">
            <div>View Orders</div>

            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

            </div>
            <div  className="row h-50 bg-secondary d-flex justify-content-center align-items-center">
            <div>Customer Notes</div>

            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>


                
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
