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
    <div className=" d-flex align-items-center justify-content-center  h "style={{padding:"2rem 10rem"}} >
     
          

      <div className=" container  border d-flex align-items-center justify-content-center  h-100 border border-secondary" style={{backgroundColor:"whitesmoke"}} >
        <div className="row-sm-12 h-75 ">
            <div className="d-flex justify-content-center">
            <img style={{height:180,width:172}} src="./logo.png"></img>
            </div>
          <form>
            <div className="mb-5 flex-col  align-items-center justify-content-center text-center">
            {/* <h2 className="text"> */}
            {/* <div onClick={()=>{ */}
      {/* st.setVal("Register") */}
    {/* }}> */}
    {/* <BearCounter/> */}
    {/* {st.bears} */}

    {/* </div> */}


    {/* <div onClick={()=>{ */}
      {/* st.setData("updating it") */}
    {/* }}> */}
    {/* <BearCounter/> */}
    {/* {st.data} */}

    {/* </div> */}



              {/* </h2> */}
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
            <button type="submit"  className="btn  w-100  border" style={{backgroundColor:"black",color:"white",fontWeight:"bold"}}>
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
