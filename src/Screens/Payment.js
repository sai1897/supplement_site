import React from "react";

export default function Payment() {
  return (
    <div className="h">
      <div
        className="row h-25 d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: "#A4E4B6",
          color: "white",
          fontWeight: 700,
          fontSize: 77,
        }}
      >
        Payment
      </div>
      <div className="container h-75  ">
      <div className="row h-25 d-flex justify-content-center mt-4 pt-4 ">
        <div className="col-lg  border m-2  shadow " >
        <img style={{width:200,height:200}} src="./card.png"/>
        <h5 className="d-flex justify-content-center">Credit / Debit Card</h5>

        </div>
        <div className="col-lg   border m-2 shadow " >
        <img style={{width:200,height:200}} src="./link.png"/>

        <h5 className="d-flex justify-content-center">Link</h5>

        </div>
        <div className="col-lg  border m-2 shadow"  >
        <img style={{width:200,height:200}} src="./bt.png"/>

        <h5 className="d-flex justify-content-center">Bank Transfer</h5>

        </div>
        <div className="col-lg border m-2 shadow"  >
        <img  style={{width:200,height:200}}   src="./check.png"/>

        <h5 className="d-flex justify-content-center">Cheque / Post Order</h5>

        </div>
      </div>
    </div>
    </div>
  );
}
