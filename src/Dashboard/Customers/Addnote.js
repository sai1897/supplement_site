import React, { useState } from "react";
import "/home/cogncise/React/suppliment/src/App.css";
// import useBearStore from "../Store/Store.js";
import { Button, Modal, ModalBody, ModalHeader, Row, Col } from "reactstrap";

const Addnote = ({ id, date, fn, tamt }) => {
  //   const st = useBearStore();
  const [modal, setmodal] = useState(false);

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
          {/* Add Customer{" "} */}
          <Button
            color="danger"
            onClick={() => setmodal(!modal)}
            style={{
              position: "absolute",
              right: 10,
            }}
          ></Button>
        </ModalHeader>

        <ModalBody>
         <div>
          <div className="d-flex align-items-center justify-content-center text-center " style={{fontSize:42,fontWeight:400}}>
          Append Notes
          </div>
          <div className=" d-flex row mt-4 justify-content-center text-center mt-4">
            <div className=" d-flex col-sm-6 align-items-center justify-content-center text-center " style={{fontWeight:400,fontSize:29}}>
            Note:
            </div>
            <div className=" d-flex col-sm-6 align-items-center justify-content-center text-center "  style={{fontWeight:400,fontSize:24}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
           </div>


          </div>
          <div className=" d-flex row mt-4 justify-content-center text-center mt-4">
            <div className=" d-flex col-sm-6 align-items-center justify-content-center text-center"  style={{fontWeight:400,fontSize:29}}>
            Append Changes:
            </div>
            <div className=" d-flex w-100 col-sm-6 align-items-center justify-content-center text-center">
            <div class="form-group w-100">
    <textarea class="form-control"  id="exampleFormControlTextarea1" rows="3" style={{backgroundColor:"#D9D9D9"}}></textarea>
  </div>

           </div>
           <div className="row d-flex  w-25 text-center align-items-center justify-content-center text-center mt-4">
           <button style={{fontWeight:"bold",fontSize:20,backgroundColor:"#1CE45F",color:"white"}} class="btn  w-100 th" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Append </button>

           </div>
 

          </div>
         </div>
        </ModalBody>
      </Modal>
      <button
        className="btn "
        style={{ backgroundColor: "#1CE45F", color: "white" }}
        onClick={() => setmodal(true)}
      >
        Add Note{" "}
      </button>
    </div>
  );
};
export default Addnote;
