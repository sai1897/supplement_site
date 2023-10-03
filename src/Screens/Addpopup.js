import React, { useState } from "react";
import "/home/cogncise/React/suppliment/src/App.css";
import { Button, Modal, ModalBody, ModalHeader, Row, Col } from "reactstrap";

const Addpopup = () => {
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
          Add Product
          <Button color="danger" onClick={() => setmodal(!modal)}
          style={{
            position:"absolute",
            right:10,
            
          }}
          
          
          ></Button>
        </ModalHeader>

        <ModalBody>
          <form>
            <Row>
              <Col lg={12}>
                <div>
                  <label htmlFor="role" class="col-lg-3">
                    Product ID:
                    <span class="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    class="col-lg-9"
                  ></input>
                </div>
              </Col>

              <Col lg={12}>
                <div>
                  <label htmlFor="id" class="col-lg-3">
                    Product Name:
                    <span class="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    class="col-lg-9"
                  ></input>
                </div>
              </Col>

              <Col lg={12}>
                <div>
                  <label htmlFor="reportingTo" class="col-lg-3">
                    Description:
                    <span class="text-danger"> *</span>
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    class="col-lg-9"
                  ></textarea>
                </div>
              </Col>

              <Col lg={12}>
                <div>
                  <label htmlFor="fname" class="col-lg-3">
                    Product Type:
                    <span class="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    class="col-lg-9"
                  ></input>
                </div>
              </Col>

              <Col lg={12}>
                <div>
                  <label htmlFor="mname" class="col-lg-3">
                    Quantity:
                    <span class="text-danger"> *</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    class="col-lg-9"
                  ></input>
                </div>
              </Col>

              <Col lg={12}>
                <div>
                  <label htmlFor="lname" class="col-lg-3">
                    Price:
                    <span class="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    class="col-lg-9"
                  ></input>
                </div>
              </Col>

              
              <Col lg={12}>
                <div class="form-group col-lg-12">
                  {" "}
                  <button
                    type="submit"
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      padding: 7,
                      backgroundColor: "#A4E4B6",
                      borderRadius: 10,
                      marginTop:30,
                      paddingLeft:20,
                      paddingRight:20
                    }}

                
                  >
                    Submit
                  </button>{" "}
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
        className="btn mt-3"
        style={{
          backgroundColor: "white",
          color: "black",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          paddingBottom: "10",
          borderRadius:"50%",
          border:"2px solid black"
        }}
        onClick={() => setmodal(true)}
      >
        <img src="./add.png"></img>
        {/* Add */}
      </button>
    </div>
  );
};
export default Addpopup;