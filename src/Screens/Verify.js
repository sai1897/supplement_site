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
          <div style={{marginTop:232,fontWeight:400,fontSize:64}}> 
          <h1>Enter your Verification Code</h1>

          </div>
          <div className="row justify-content-center"> 
          <h9 style={{fontSize:40,fontWeight:400}}>We have sent a verification code to your email ID</h9>

          </div>
          <div className="row justify-content-center">
            <h6 style={{fontSize:40,fontWeight:400}}>
            <a><u style={{color:"#019332"}}>Send code again</u></a>
            </h6>

          </div>

        </div>
      </div>
    </div>
  );
};
export default Verify;
