import React from "react";

export default function Passf() {
  return (
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
            <img style={{height:100,width:100}} src="./forgot.png"></img>
            </div>
          <div className="row">
         
            <div className=" d-flex col justify-content-center">
              <h1>Forgot Password</h1>
            </div>
          </div>
          <div className="row">
            <div className=" d-flex col justify-content-center">
              <h8>
                Enter the OTP sent to your email ID to reset your password{" "}
              </h8>
            </div>
          </div>

          <div className=" d-flex row justify-content-center">
            <div className="col-sm-1  box m-2"></div>
            <div className="col-sm-1 box m-2"></div>
            <div className="col-sm-1 box m-2"></div>
            <div className="col-sm-1 box m-2"></div>
            <div className="col-sm-1 box m-2"></div>
            <div className="col-sm-1 box m-2"></div>
          </div>
          <div className="row d-flex justify-content-center">
            <u style={{ color: "#019332", fontSize: 25 }}>Send code again</u>
          </div>
          <div className="row d-flex justify-content-center my-2">
            <button
              type="button "
              class="btn "
              style={{
                width: 200,
                backgroundColor: "#1CE45F",
                fontWeight: "bold",
                fontSize: 23,
              }}
            >
Submit
            </button>
          </div>
          <div className="row d-flex justify-content-center m-4">
          <img  className="mr-4" style={{height:20,width:20}} src="./arrow.png"></img>

          <small>Back to LogIn</small>
          </div>
        </div>
      </div>
    </div>
  );
}
