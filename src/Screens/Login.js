import React from "react";
import "../App.css";

const Login = () => {
  return (
    <div className=" d-flex align-items-center justify-content-center  h "style={{backgroundColor:"#9CEFC0"}} >
      <div className=" container border d-flex align-items-center justify-content-center  h-75 border border-secondary" style={{backgroundColor:"whitesmoke"}} >
        <div className="row-sm-12 h-75">
            <div className="d-flex justify-content-center">
            <img style={{height:60,width:140}} src="./download.png"></img>
            </div>
          <form>
            <div className="mb-5 flex-col  align-items-center justify-content-center text-center">
            <h2 className="text">Sign in</h2>
            <small>Please enter your login information</small>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1" className="mb-5">Username</label>
              <input
                type="email"
                className="form-control mb-5 text_input border"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control mb-5  text_input border"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <small id="emailHelp" className=" form-text text-muted mb-5">
              <u>Forgot password ?</u>
              </small>
            <div className="form-check">
              
              
            </div>
            <div className="d-flex  align-items-center justify-content-center mb-3">
            <button type="submit"  className="btn  w-100 border" style={{backgroundColor:"black",color:"white",fontWeight:"bold"}}>
                LOGIN
            </button>
            </div>
            <div className="d-flex justify-content-center">

            <small><h7>Don't have an account? </h7>
            <a href="url">
                <u> Sign Up</u> </a>
                </small>
            </div>
          </form>
        </div>
      </div>
      </div>
  );
};

export default Login;
