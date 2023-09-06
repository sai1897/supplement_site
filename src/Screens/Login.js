import React from "react";
import "../App.css";

const Login = () => {
  return (
    <div className=" d-flex align-items-center justify-content-center  h ">
      <div className="container border d-flex align-items-center justify-content-center h-75 border border-secondary">
        <div className="row h-75 ">
           
          <form>
            <div className="mb-5 flex-col  align-items-center justify-content-center text-center">
            <h2 className="text">Sign in</h2>
            <small>Please enter your login information</small>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1" className="mb-5">Email address</label>
              <input
                type="email"
                className="form-control mb-5"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control mb-5"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <small id="emailHelp" class=" form-text text-muted mb-5">
              <u>Forgot password ?</u>
              </small>
            <div class="form-check">
              
              
            </div>
            <div className="d-flex  align-items-center justify-content-center mb-5">
            <button type="submit"  className="btn  w-100 border" style={{backgroundColor:"black",color:"white"}}>
                Login
            </button>
            </div>
            <div className="d-flex justify-content-center">

            <h7>Don't have an account? </h7>
            <a href="url">
                <u> Sign Up</u> </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
