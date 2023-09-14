import React, { useState } from "react";
import "/home/cogncise/React/suppliment/src/App.css";
// import useBearStore from "../Store/Store.js";
import { Button, Modal, ModalBody, ModalHeader, Row, Col } from "reactstrap";
export default function 

() 
{
    const [modal, setmodal] = useState(false);

  return (
    <div>
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
Quote Details          <Button
            color="danger"
            onClick={() => setmodal(!modal)}
            style={{
              position: "absolute",
              right: 10,
            }}
          ></Button>
        </ModalHeader>

        <ModalBody>
          <form  d-flex justify-content-center text-center align-items-center m-2>
           <div className="row">
           

           </div>
           <div className="row d-flex justify-content-center">
           <table class="table " style={{
            width:250
           }}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
            
           </div>
          </form>
        </ModalBody>
      </Modal>
      <button
        className="btn d-flex flex-row "
        style={{ backgroundColor:"orange", color: "white" }}
        onClick={() => setmodal(true)}
      >
        <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/40C057/search--v1.png" />
        View
      </button>
    </div>

    </div>
  )
}
