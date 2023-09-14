import React from "react";
import "../App.css"
const Verify = () => {
  return (
    <div
      className="h  d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#A4E4B6", }}
    >
      <div
        className="container-fluid text-center"
        style={{ backgroundColor: "#FFFFFF" ,height:713,width:1369}}
      >
        <div>
          <div style={{marginTop:150,fontWeight:400,fontSize:64}}> 
          <h1>Enter your Verification Code</h1>

          </div>
          <div className="row justify-content-center mt-4"> 
          <h9 style={{fontSize:40,fontWeight:400}}>We have sent a verification code to your email ID</h9>

          </div>
          <div className="row justify-content-center m-4">
            <div color="col" style={{height:100,width:100,backgroundColor:"#D9D9D9",margin:20}}>
              <input type="password" style={{height:100,width:100,backgroundColor:"#D9D9D9",fontSize:44}}></input>
            </div>
            <div color="col" style={{height:100,width:100,backgroundColor:"#D9D9D9",margin:20}}>
              <input type="password"  style={{height:100,width:100,backgroundColor:"#D9D9D9",fontSize:44}}></input>
            </div><div color="col" style={{height:100,width:100,backgroundColor:"#D9D9D9",margin:20}}>
              <input type="password" style={{height:100,width:100,backgroundColor:"#D9D9D9",fontSize:44}}></input>
            </div><div color="col" style={{height:100,width:100,backgroundColor:"#D9D9D9",margin:20}}>
              <input type="password" style={{height:100,width:100,backgroundColor:"#D9D9D9",fontSize:44}}></input>
            </div>
            <div color="col" style={{height:100,width:100,backgroundColor:"#D9D9D9",margin:20}}>
              <input type="password"    style={{height:100,width:100,backgroundColor:"#D9D9D9",fontSize:44}}></input>
            </div><div color="col" style={{height:100,width:100,backgroundColor:"#D9D9D9",margin:20}}>
              <input type="password" style={{height:100,width:100,backgroundColor:"#D9D9D9",fontSize:44}}></input>
            </div>

          </div>
          <div className="row justify-content-center mt-4">
            <h6 style={{fontSize:30,fontWeight:400}}>
            <a><u style={{color:"#019332"}}>Send code again</u></a>
            </h6>

          </div>
          <div >
            <button  className="font shadow" style={{backgroundColor:"#1CE45F",width:350,height:73,fontSize:40,fontWeight:600,marginTop:33}}>
              Verify
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};
export default Verify;
