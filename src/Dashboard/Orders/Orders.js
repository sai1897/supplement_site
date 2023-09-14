import React from 'react'
import Popup from './Popup'
import Navbar from "/home/cogncise/React/suppliment/src/Screens/Navbar.js";
import Menu from "/home/cogncise/React/suppliment/src/Screens/Menu.js";
import "/home/cogncise/React/suppliment/src/App.css";
export default function Orders() {

  // const Popup=()=>{
  //   return(
  //     <Popup/>

  //   )
  // }
  return (
    <div>
      <div className="h container-fluid">
      <Navbar />
      <div className="row h-100 mt-4">
        <div className=" col-sm-2">
          <Menu />
        </div>

        <div className="col-sm-10 ">
          <div className="row h-10 d-flex justify-content-start align-items-center " style={{color:"#0FA958",fontWeight:600,fontSize:64,fontFamily:"serif"}}>
          All Orders
          
          </div>

          <div className="row  h-90 d-flex justify-content-center text-center align-items-center ">
          <div className="row  h-60 d-flex justify-content-start"  >
          <table className="table  table-bordered table-sm " style={{marginTop:"3rem", }}>
        <thead  >
          <tr>
            <th scope="col-5"></th>
            <th scope="col">Order ID</th>
            <th scope="col">Date</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Agent Name</th>
            <th scope="col">Total Amount</th>
            <th scope="col">Status</th>

            <th scope="col">View/Edit</th>


          </tr>
          <tr>
             <th scope="col-5">ID</th>
            <th scope="col"><input type="text" placeholder="search"/></th>
            <th scope="col"><input type="text" placeholder="search"/></th>
            <th scope="col"><input type="text" placeholder="search"/></th>
            <th scope="col"><input type="text" placeholder="search"/></th>
            <th scope="col"><input type="text" placeholder="search"/></th>
            <th scope="col"><input type="text" placeholder="search"/></th>
            <th scope="col"><input type="text" placeholder="search"/></th>


            <th scope="col"></th>
          </tr>
         
        </thead>
        <tbody>
          <tr >
            <th scope="row">1</th>
            <td>12455</td>
            <td>1448-9-1997</td>
            <td>test</td>
            <td>Test</td>
            <td>rrrr</td>
            <td>44</td>

            <td>paid</td>
            <td>
            <Popup id={"12455"} date={"1448-9-1997"} fn={"test"} ln={"Test"} tamt={44} />
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            
            <td></td>

            <td></td>

            <td>
            <Popup/>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>

            <td>
            <Popup/>
            </td>
          </tr>
        </tbody>
      </table>
          </div>
          </div>
        </div>
      </div>
          </div>
    

    </div>
  )
}
