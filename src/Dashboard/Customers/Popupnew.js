import React, { useState } from "react";
import "/home/cogncise/React/suppliment/src/App.css";
// import useBearStore from "../Store/Store.js";
import { Button, Modal, ModalBody, ModalHeader, Row, Col } from "reactstrap";


const Popupnew = ({id,date,fn,tamt}) => {
  //   const st = useBearStore();
  const [modal, setmodal] = useState(false);
   

  const[firstname,setFirstname]=useState("")
  const[middlename,setMiddlename]=useState("")
  const[last_name,setLastname]=useState("")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  const[landline_phone,setLandline_phone]=useState("")


  const[address1,setAddress1]=useState("")
  const[address2,setAddress2]=useState("")



  const[city,setCity]=useState("")
  const[country,setCountry]=useState("")
  const[postal_code,setPostal_code]=useState("")
  const[remark,setRemark]=useState("")
  const[dnc,setDnc]=useState(false)




// const Nap=()=>{
//   console.log("hu")

// }
  const addInfo = () => {
    var info = 
    {
      first_name:firstname ,
      middle_name:middlename,
      last_name:last_name,
      email: email,
      phone: phone,
      landline_phone:landline_phone,
      address: {
          address1 : address1,
          address2 : address2,
          city:city,
          country:country,
          postal_code:postal_code
      },
      remarks: remark,
      dnc: dnc
  }
    

    fetch(
      "https://meven.pythonanywhere.com/api/customer/register/"
      
      , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    }).then((response) => {
      // if (response.ok == true){
      //   (navigate("/dashboard"))
      // console.log("https://meven.pythonanywhere.com/api/customer/register/")

      // }
      console.log(response)

    })}










      
  const Set=()=>{
    setDnc(true)
  }
  

  return (
    <div>
      <Modal size="lg" isOpen={modal} toggle={() => setmodal(!modal)}>
        <ModalHeader
        // toggle={() => setmodal(!modal)}
        // style={{
        //     marginLeft:"auto",
        //     marginRight:"auto",
        //     width:790
        // }}
        >
Add Customer          <Button
            color="danger"
            onClick={() => setmodal(!modal)}
            style={{
              position: "absolute",
              right: 10,
            }}
          ></Button>
        </ModalHeader>

        <ModalBody>
          <form>
            <Row>
              <Col lg={12}>
                <div>
                  {/* <label htmlFor="role" class="col-lg-3">
                    Role
                    <span class="text-danger"> *</span>
                  </label> */}

                  {/* <select
                    class="form-select col-lg-9"
                    aria-label="Default select example"
                  >
                    <option selected>Select role</option>
                    <option value="agent">Agent</option>
                    <option value="2">Team manager</option>
                    <option value="3">Customer care</option>
                  </select> */}
                </div>
              </Col>

              <Col lg={12}>
                {/* <div>
                  <label htmlFor="id" class="col-lg-3">
                  Customer ID:
                    <span class="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    class="col-lg-9"
                    placeholder={id}
                  ></input>
                </div> */}
              </Col>

              <Col lg={12}>
                <div>
                  <label htmlFor="reportingTo" class="col-lg-3">
                  First Name: <span class="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    class="col-lg-9"
                    placeholder={date}
                    onChange={(e)=>setFirstname(e.target.value)}
                  ></input>
                </div>
              </Col>

              <Col lg={12}>
                <div>
                  <label htmlFor="fname" class="col-lg-3">
                  Middle Name:                  <span class="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    class="col-lg-9"
                    onChange={(e)=>setMiddlename(e.target.value)}

                  ></input>
                </div>
              </Col>

              <Col lg={12}>
                <div>
                  <label htmlFor="mname" class="col-lg-3">
                  Last Name:                 </label>
                  <input
                    type="text"
                    className="form-control"
                    class="col-lg-9"
                    placeholder={fn}
                    onChange={(e)=>setLastname(e.target.value)}
                  ></input>
                </div>
              </Col>

              <Col lg={12}>
                <div>
                  <label htmlFor="lname" class="col-lg-3">
                  Email:                   <span class="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    class="col-lg-9"
                    onChange={(e)=>setEmail(e.target.value)}
                  ></input>
                </div>
              </Col>

              <Col lg={12}>
                <div>
                  <label htmlFor="phoneno" class="col-lg-3">
                  Phone No.                    <span class="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    class="col-lg-9"
                    onChange={(e)=>setPhone(e.target.value)}
                  ></input>
                </div>
              </Col>

              <Col lg={12}>
                <div>
                  <label htmlFor="password" class="col-lg-3">
                  Landline No.                   <span class="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    class="col-lg-9"
                    onChange={(e)=>setLandline_phone(e.target.value)}
                  ></input>
                </div>
              </Col>

              <Col lg={12}>
                <div>
                  <label htmlFor="confirmPassword" class="col-lg-3">
                  Address 1                   <span class="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    class="col-lg-9"
                    onChange={(e)=>setAddress1(e.target.value)}
                  ></input>
                </div>
              </Col><Col lg={12}>
                <div>
                  <label htmlFor="confirmPassword" class="col-lg-3">
                  Address 2                  <span class="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    class="col-lg-9"
                    onChange={(e)=>setAddress2(e.target.value)}
                  ></input>
                </div>
              </Col><Col lg={12}>
                <div>
                  <label htmlFor="confirmPassword" class="col-lg-3">
                  Town/City                    <span class="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    class="col-lg-9"
                    onChange={(e)=>setCity(e.target.value)}

                  ></input>
                </div>
              </Col>
              <Col lg={12}>
                <div>
                  <label htmlFor="confirmPassword" class="col-lg-3">
                  Country          <span class="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    class="col-lg-9"
                    onChange={(e)=>setCountry(e.target.value)}

                  ></input>
                </div>
              </Col>
              <Col lg={12}>
                <div>
                  <label htmlFor="confirmPassword" class="col-lg-3">
                  Post Code:                   <span class="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={tamt}
                    class="col-lg-9"
                    onChange={(e)=>setPostal_code(e.target.value)}

                  ></input>
                </div>
              </Col>
              <Col lg={12}>
                <div>
                  <label htmlFor="confirmPassword" class="col-lg-3">
                  Remark                  <span class="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={tamt}
                    onChange={(e)=>setRemark(e.target.value)}

                    class="col-lg-9"
                  ></input>
                </div>
              </Col>
              <Col lg={12}>
              <div class="form-check" style={{marginBottom:33,marginLeft:15}}>
    <input  onClick={()=>{Set()}}  type="checkbox" style={{backgroundColor:"#D9D9D9"}} class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1" >Do not call</label>
  </div>
              </Col>


  
              <Col lg={12}>
                <div  onClick={()=>addInfo()}    class="form-group col-lg-12">
          
                  <button 
                  
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    padding: 7,
                    backgroundColor: "#7BBC8A",
                    color:"#FFFFFF",
                    borderRadius: 10,
                    marginTop: 30,
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}
                  type="button" class="btn " onClick={()=>addInfo()}>Submit</button>

                </div>

                {/* <div class="d-grid col-2 mx-auto">
  <button class="btn btn-success" type="button">Proceed</button>
</div> */}


              </Col>
            </Row>
          </form>
        </ModalBody>
      </Modal>
      <button
        className="btn "
        style={{ backgroundColor: "#1CE45F", color: "white" }}
        onClick={() => setmodal(true)}
      >
Add New Customer      </button>
    </div>
  );
};
export default Popupnew;