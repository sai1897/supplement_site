import React from "react";

const Verify = () => {
  return (
    <div
      className="h  d-flex align-items-center justify-content-center "
      style={{ backgroundColor: "#A4E4B6" }}
    >
      <div
        className="container w-75 h-50  "
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="row">
          <div className=" d-flex col justify-content-center">
            <h1>Enter your Verification Code</h1>
          </div>
        </div>
        <div className="row">
          <div className=" d-flex col justify-content-center">
            <h5>We have sent a verification code </h5>
          </div>
        </div>
        <div className="row">
          <div className=" d-flex col justify-content-center">
            <h5> to your email ID</h5>
          </div>
        </div>
        <div className=" d-flex row justify-content-center">
          <div className="col-sm-1  box m-2">

          </div>
          <div className="col-sm-1 box m-2">

          </div>
          <div className="col-sm-1 box m-2">

          </div>
          <div className="col-sm-1 box m-2">

          </div>
        </div>
        <div className="row d-flex justify-content-center">
            <u style={{color:"#019332",fontSize:25}}>Send code again</u>
        </div>
        <div className="row d-flex justify-content-center my-2" >
        <button type="button " class="btn "  style={{width:200,backgroundColor:"#1CE45F",fontWeight:"bold",fontSize:23}}>Verify</button>


        </div>
      </div>
    </div>
  );
};
export default Verify;
