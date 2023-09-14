import React from "react";
import "../App.css";
import useBearStore from "../Store/Store.js";


const Login = () => {
  const   st = useBearStore()
  // function BearCounter() {
  //   const bears = useBearStore((state) => state.bears)
  //   return <h1>{bears} </h1>
  // }




  return (
    <div className=" d-flex grad align-items-center justify-content-center  h  "  >
      <div>
     <div className=" p-4   border1 d-flex align-items-center justify-content-center" style={{height:720,width:602,backgroundColor:"#FFFFFF"}}>


     <form>
     <img src="./natureshealthcare 1.png"/>

  <div class="form-group" style={{marginBottom:33}}>
    <label for="exampleInputEmail1 " className="font">Username</label>
    <input style={{height:50,width:460,borderRadius:10,backgroundColor:"#D9D9D9"}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div class="form-group " style={{marginBottom:33}}>
    <label for="exampleInputPassword1"  className="font">Password</label>
    <input style={{height:50,width:460,borderRadius:10,backgroundColor:"#D9D9D9"}} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="d-flex flex-row inter">
  <a style={{color:"#074DFF"}}>Forgot Password?</a>

  <div class="form-check" style={{marginBottom:33,marginLeft:33}}>
    <input type="checkbox" style={{backgroundColor:"#D9D9D9"}} class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1" >Check me out</label>
  </div>
  </div>
  <div className="d-flex align-items-center justify-content-center " >
  <button className="d-flex align-items-center justify-content-center text-center" style={{ height:60 ,width:210 ,borderRadius:18,backgroundColor:"#6AE531"}} type="submit">
    <div   className="font" style={{fontWeight:500,fontSize:36,color:"#FFFFFF"}}> Login</div>
  </button>
  </div>
</form>
     </div>
          

     </div>
      </div>
  );
};

export default Login;
