import React, { useState } from "react";
import "../App.css";
import useBearStore from "../Store/Store.js";
import { Button, Modal, ModalBody, ModalHeader, Row, Col } from "reactstrap";

const Popup = () => {
  const st = useBearStore();
  const [modal, setmodal] = useState(false);

  return (
    <div style={{
        marginTop:45
    }}>
      <Modal size="lg" isOpen={modal} toggle={() => setmodal(!modal)}>
        <ModalHeader
        // toggle={() => setmodal(!modal)}
        // style={{
        //     marginLeft:"auto",
        //     marginRight:"auto",
        //     width:790
        // }}
        >
          Add/edit users
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
          <form>
            <Row>
              <Col lg={12}>
                <div>
                  <label htmlFor="role" class="col-lg-3">
                    Role
                    <span class="text-danger"> *</span>
                  </label>

                  <select
                    class="form-select col-lg-9"
                    aria-label="Default select example"
                  >
                    <option selected>Select role</option>
                    <option value="agent">Agent</option>
                    <option value="2">Team manager</option>
                    <option value="3">Customer care</option>
                  </select>
                </div>
              </Col>

              <Col lg={12}>
                <div>
                  <label htmlFor="id" class="col-lg-3">
                    ID
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
                    Reporting to
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
                  <label htmlFor="fname" class="col-lg-3">
                    First name
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
                    Middle name
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
                  <label htmlFor="lname" class="col-lg-3">
                    Last name
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
                  <label htmlFor="phoneno" class="col-lg-3">
                    Phone No.
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
                  <label htmlFor="password" class="col-lg-3">
                    Password
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
                  <label htmlFor="confirmPassword" class="col-lg-3">
                    Confirm password
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
                      marginTop: 30,
                      paddingLeft: 20,
                      paddingRight: 20,
                    }}
                  >
                    Proceed
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
        className="btn mt-3 btn-lg"
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
        <img src="./userm.png"></img>
        {/* Add users */}
      </button>
    </div>
  );
};
export default Popup;
