import React from "react";
import "../App.css"
const Menu=()=> {
  return (
    <div className="menu"> 
    <div className="h2 mt-3" style={{width:389}}>

          <div className="h-75">
          <div  style={{marginTop:10}}>
        <div class="dropdown show d-flex flex-row p-5  m-1">
        <img src="./Dashboard/ic_sharp-dashboard.png"/>

  <a    class="btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Dashboard          <img src="./Dashboard/drop.png"/>
</a>


</div>
        </div>
        <div  style={{marginTop:10}}>
        <div class="dropdown show d-flex flex-row p-5  m-1">
        <img src="./Dashboard/Group.png"/>

  <a   style={{width:250}} class="btn  " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Customers   <img src="./Dashboard/drop.png"/> </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="/customers">Customer List</a>
    
  </div>
</div>
        </div>
        <div  style={{marginTop:10}}> 
        <div class="dropdown show d-flex flex-row p-5  m-1">
        <img src="./Dashboard/eos-icons_cluster-management.png"/>

  <a  style={{width:250}} class="btn " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
User Management <img src="./Dashboard/drop.png"/>
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Add Agent</a>
    <a class="dropdown-item" href="#">List of Users</a>
    <a class="dropdown-item" href="#">Agent History</a>
  </div>
</div>
        </div>
        <div  style={{marginTop:10}}>
        <div class="dropdown show d-flex flex-row p-5  m-1">
          <img src="./Dashboard/Vector(9).png"/>
  <a   style={{width:250}} class="btn " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Orders <img src="./Dashboard/drop.png"/>
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Order History</a>
    <a class="dropdown-item" href="#">To be Dispatch</a>
    <a class="dropdown-item" href="#">Upcomming Orders</a>
  </div>
</div>
        </div>
        <div  style={{marginTop:10}}>
        <div class="dropdown show d-flex flex-row p-5  m-1 ">
          <img src="./Dashboard/iconoir_reports.png"/>
  <a   style={{width:250}}class="btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

Reports <img src="./Dashboard/drop.png"/> </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Sales Report </a>
    <a class="dropdown-item" href="#">Customer Report </a>
    <a class="dropdown-item" href="#">Product Report </a>
    <a class="dropdown-item" href="#">Financial Report  </a>
    <a class="dropdown-item" href="#">Inventory Report  </a>

  </div>
</div>
        </div>
        <div  style={{marginTop:10}}>
        <div class="dropdown show d-flex flex-row p-5  m-1 ">
          <img   src="./Dashboard/gridicons_refund.png"/>
  <a  style={{width:250}} class="btn  " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

Refunds <img src="./Dashboard/drop.png"/>
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Refund Tracking</a>
    <a class="dropdown-item" href="#">Refund Analytics</a>
    <a class="dropdown-item" href="#">Refund Policy</a>
  </div>
</div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Menu
