import React from "react";
import "../App.css"
const Verify = () => {
  return (
    <div
      className="h  d-flex align-items-center justify-content-between"
      style={{ backgroundColor: "#A4E4B6", }}
    >
      <div
        className="container w-75"
        style={{ backgroundColor: "#FFFFFF" ,height:713}}
      >
        <div className="row">
          <div className=" d-flex col justify-content-center m-4 "style={{fontFamily:"inter",fontWeight:900,fontSize:900}}>
            <h1 >Enter your Verification Code</h1>
          </div>
        </div>
        <div className="row">
          <div className=" d-flex col justify-content-center m-1">
            <h5>We have sent a verification code </h5>
          </div>
        </div>
        <div className="row">
          <div className=" d-flex col justify-content-center m-4">
            <h5> to your email ID</h5>
          </div>
        </div>
        <div className=" d-flex row justify-content-center m-4">
          <div className="col-sm-1  box m-2">

          </div>
          <div className="col-sm-1 box m-2">

          </div>
          <div className="col-sm-1 box m-2">

          </div>
          <div className="col-sm-1 box m-2">

          </div>
        </div>
        <div className="row d-flex justify-content-center m-4">
            <u style={{color:"#019332",fontFamily:"Montserrat",fontWeight:100,fontSize:25}}>Send code again</u>
        </div>
        <div className="row d-flex justify-content-center my-2" >
        <button type="button " class="btn "  style={{width:200,backgroundColor:"#1CE45F",fontWeight:800,fontSize:23}}>Verify</button>


        </div>
      </div>
    </div>
  );
};
export default Verify;
