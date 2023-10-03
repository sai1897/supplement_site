import React, { useState } from "react";
import "../App.css"
import { useNavigate } from "react-router-dom";
import OtpInput from 'react-otp-input';

const Verify = () => {
  const navigate = useNavigate();

  // const [o,setO]=useState("")
  // const [p,setP]=useState("")
  // const [q,setQ]=useState("")
  // const [r,setS]=useState("")
  // const [t,setT]=useState("")
  // var otp=o+p+q+r+t

  const [OTP, setOTP] = useState("");


  const Otp_verify = () => {

    const info = 
      {
        email:localStorage.getItem("username"),
        otp: OTP,
      }
    

    fetch(
      "https://meven.pythonanywhere.com/api/user/verify_otp/"
      
      , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    }).then((response) => {
      if (response.ok == true){
        (navigate("/dashboard"))

      }
    })

   
  };
  const Otp_resend = () => {

    const info = 
      {
        email:localStorage.getItem("username"),
      }
    

    fetch(
      "https://meven.pythonanywhere.com/api/user/resend_otp/"
      
      , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    }).then((response) => {
      // if (response.ok == true){
      //   (navigate("/dashboard"))

      // }
      console.log(response)
    })}
  
  const Resend=()=>{


    const info = 
    {
      email: localStorage.getItem("username"),
      password: localStorage.getItem("password"),
    }
  
  
  fetch(
    "https://meven.pythonanywhere.com/api/user/login/"
    
    , {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  }).then((response) => console.log(response))
  
};

  


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
            {/* <div color="col d-flex justify-content-center" style={{height:100,width:100,backgroundColor:"#D9D9D9",margin:20}}>
              <input onChange={(e)=>setO(e.target.value)} type="password" style={{height:100,width:100,backgroundColor:"#D9D9D9",fontSize:44,maxlength:1,textAlign:"center"}}></input>
            </div>
            <div color="col" style={{height:100,width:100,backgroundColor:"#D9D9D9",margin:20}}>
              <input  onChange={(e)=>setP(e.target.value)} type="password"  style={{height:100,width:100,backgroundColor:"#D9D9D9",fontSize:44,maxlength:1,textAlign:"center"}}></input>
            </div><div color="col" style={{height:100,width:100,backgroundColor:"#D9D9D9",margin:20}}>
              <input onChange={(e)=>setQ(e.target.value)} type="password" style={{height:100,width:100,backgroundColor:"#D9D9D9",fontSize:44,maxlength:1,textAlign:"center"}}></input>
            </div><div color="col" style={{height:100,width:100,backgroundColor:"#D9D9D9",margin:20}}>
              <input onChange={(e)=>setS(e.target.value)} type="password" style={{height:100,width:100,backgroundColor:"#D9D9D9",fontSize:44,maxlength:1,textAlign:"center"}}></input>
            </div>
            <div color="col" style={{height:100,width:100,backgroundColor:"#D9D9D9",margin:20}}>
              <input   onChange={(e)=>setT(e.target.value)} type="password"    style={{height:100,width:100,backgroundColor:"#D9D9D9",fontSize:44,maxlength:1,textAlign:"center"}}></input>
            </div><div color="col" style={{height:100,width:100,backgroundColor:"#D9D9D9",margin:20}}>
             <input type="password" style={{height:100,width:100,backgroundColor:"#D9D9D9",fontSize:44}}></input>
            </div>  */}
            <div>
            <OtpInput
        value={OTP}
        onChange={setOTP}
        numInputs={5}
        renderSeparator={<span> </span>}
        inputType="tel"
        containerStyle={{ display: 'unset' }}
        inputStyle={{ width: "3rem", height: "3.5rem" ,margin:10}}
        renderInput={(props) => <input {...props} className='otp-input' />}
      />
                      </div>

          </div> 
          <div className="row justify-content-center mt-4" onClick={()=>Otp_resend()}>
            <h6 style={{fontSize:30,fontWeight:400}}>
            <a><u style={{color:"#019332"}}  onclick={()=>Resend()}>Send code again</u></a>
            </h6>

          </div>
          <div >

            <button  onClick={()=>Otp_verify()}  className="font shadow" style={{backgroundColor:"#1CE45F",width:350,height:73,fontSize:40,fontWeight:600,marginTop:33}}>
              Verify
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};
export default Verify;
