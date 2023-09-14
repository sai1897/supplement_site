import React from "react";

export default function Payment() {
  return (
    <div className="h container-fluid">
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
        <div className="col-lg  border m-2  shadow pt-4" >
          <div className=" d-flex justify-content-center">
        <img style={{width:100,height:100,margin:20}} src="./card.png"/>
        </div>
        <h5 className="d-flex justify-content-center">Credit / Debit Card</h5>
        </div>

        <div className="col-lg   border m-2 shadow pt-4" >
        <div className=" d-flex justify-content-center">

        <img style={{width:100,height:100,margin:20}} src="./link.png"/>
        </div>


        <h5 className="d-flex justify-content-center">Link</h5>

        </div>
        <div className="col-lg  border m-2 shadow   pt-4 "  >
        <div className=" d-flex justify-content-center">

        <img style={{width:100,height:100,margin:20}} src="./bt.png"/>
        </div>

        <h5 className="d-flex justify-content-center">Bank Transfer</h5>

        </div>
        <div className="col-lg border m-2 shadow p-4"  >
        <div className=" d-flex justify-content-center">

        <img  style={{width:100,height:100,margin:20}}   src="./check.png"/>
</div>
        <h5 className="d-flex justify-content-center">Cheque / Post Order</h5>

        </div>
      </div>
    </div>
    </div>
  );
}
