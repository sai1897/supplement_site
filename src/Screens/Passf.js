import React from "react";
import "../App.css"
export default function Passf() {
  return (
    <div>
      <div
        className="h  p d-flex align-items-center justify-content-center">
        
      
      
        <div
          className="container-fluid border" style={{height:800,width:800,backgroundColor:"#FFFFFF"}}
          
        >
           <div className="d-flex justify-content-center m-4">
            <img style={{height:100,width:100}} src="./forgot.png"></img>
            </div>
          <div className="row" style={{marginTop:40}}>
         
            <div className=" d-flex col justify-content-center">
              <h1 style={{fontWeight:400,fontSize:64}}>Forgot Password</h1>
            </div>
          </div>
          <div className="row"  style={{marginTop:60}}>
            <div className=" d-flex col justify-content-center">
              <h8 style={{fontWeight:400,fontSize:24}}>
                Enter the OTP sent to your email ID to reset your password{" "}
              </h8>
            </div>
          </div>

          <div className=" d-flex row justify-content-center"  style={{marginTop:60}}>
            <div className="col-sm-1 box m-2 d-flex align-items-center justify-content-center">
            <input type="password"    style={{height:70,width:50,backgroundColor:"#D9D9D9",fontSize:44}}></input>

            </div>
            <div className="col-sm-1 box m-2 d-flex align-items-center justify-content-center">
            <input type="password"    style={{height:70,width:50,backgroundColor:"#D9D9D9",fontSize:44}}></input>

            </div>
            <div className="col-sm-1 box m-2 d-flex align-items-center justify-content-center">
            <input type="password"    style={{height:70,width:50,backgroundColor:"#D9D9D9",fontSize:44}}></input>

            </div>
            <div className="col-sm-1 box m-2 d-flex align-items-center justify-content-center">
            <input type="password"    style={{height:70,width:50,backgroundColor:"#D9D9D9",fontSize:44}}></input>

            </div>
            <div className="col-sm-1 box m-2 d-flex align-items-center justify-content-center">
            <input type="password"    style={{height:70,width:50,backgroundColor:"#D9D9D9",fontSize:44}}></input>

            </div>
            <div className="col-sm-1 box m-2 d-flex align-items-center justify-content-center">
            <input type="password"    style={{height:70,width:50,backgroundColor:"#D9D9D9",fontSize:44}}></input>

            </div>
          </div>
          <div className="row d-flex justify-content-center"  style={{marginTop:60}}>
            <u style={{ color: "#019332", fontSize: 25 }}>Send code again</u>
          </div>
          <div className="row d-flex justify-content-center "  style={{marginTop:60}}>
            <button
              type="button "
              class="btn shadow "
              style={{
                width: 400,
                height:50,
                backgroundColor: "#1CE45F",
                fontWeight: "bold",
                fontSize: 23,
                color:"white"
              }}
            >
Submit
            </button>
          </div>
          <div className="row d-flex justify-content-center"  style={{marginTop:60}}>
          <img  className="mr-4" style={{height:20,width:20}} src="./arrow.png"></img>

          <small>Back to LogIn</small>
          </div>
        </div>
      </div>
    </div>
  );
}
