import React from "react";
import "../App.css"
export default function () {
  return (
    <div>
      <div>
        <div
          className="h w d-flex align-items-center justify-content-center  "
          style={{ backgroundColor: "#A4E4B6"}}
        >
          <div
            className="  container-fluid mx-4 shadow w-50"
            style={{ backgroundColor: "#FFFFFF",height:650,borderStyle:"solid",borderWidth:2,width:1200}}
          >
            <div className="d-flex justify-content-center m-4">
              <img style={{ height: 100, width: 100 ,marginTop:50}} src="./forgot.png"></img>
            </div>
            <div className="row m-4" style={{marginTop:50}}>
              <div className=" d-flex col justify-content-center" style={{fontWeight:700}}>
                <h1>Confirm Password</h1>
              </div>
            </div>
            <div className="row d-flex justify-content-center "style={{marginTop:40}}>
              <div className="d-flex col-sm-3 justify-content-center ">
              New Password:
              </div>
              <div className=" d-flex col-sm-3 justify-content-center">
              <div class="mb-3">
    <input type="password" class="form-control" id="exampleInputPassword1" style={{backgroundColor:"#D9D9D9"}}/>
  </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center ">
              <div className="d-flex col-sm-3 justify-content-center">
              Confirm Password:
              </div>
              <div className="d-flex col-sm-3 justify-content-center">
              <div class="mb-3">
    <input type="password" class="form-control" id="exampleInputPassword1" style={{backgroundColor:"#D9D9D9"}}/>
  </div>

              </div>
            </div>
            <div className="row d-flex justify-content-center m-4 ">
              <button
                type="button "
                className="btn shadow"
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
