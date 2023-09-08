import React from "react";

export default function () {
  return (
    <div>
      <div>
        <div
          className="h  d-flex align-items-center justify-content-center "
          style={{ backgroundColor: "#A4E4B6" }}
        >
          <div
            className="container w-75 h-75 "
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <div className="d-flex justify-content-center m-4">
              <img style={{ height: 100, width: 100 }} src="./forgot.png"></img>
            </div>
            <div className="row">
              <div className=" d-flex col justify-content-center">
                <h1>Confirm Password</h1>
              </div>
            </div>
            <div className="row d-flex justify-content-center m-4">
              <div className="d-flex col-sm-3 justify-content-center">
              New Password:
              </div>
              <div className=" d-flex col-sm-3 justify-content-center">
              <div class="mb-3">
    <input type="password" class="form-control" id="exampleInputPassword1" style={{backgroundColor:"#D9D9D9"}}/>
  </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center m-4">
              <div className="d-flex col-sm-3 justify-content-center">
              Confirm Password:
              </div>
              <div className="d-flex col-sm-3 justify-content-center">
              <div class="mb-3">
    <input type="password" class="form-control" id="exampleInputPassword1" style={{backgroundColor:"#D9D9D9"}}/>
  </div>

              </div>
            </div>
            <div className="row d-flex justify-content-center m-4">
              <button
                type="button "
                class="btn "
                style={{
                  width: 200,
                  backgroundColor: "#1CE45F",
                  fontWeight: "bold",
                  fontSize: 23,
                  color: "white",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
