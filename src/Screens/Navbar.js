import React from 'react'
import "../App.css"
export default function Navbar() { 
  return (
    <div className='h3'>
        <div className='row' style={{height:108 ,backgroundColor:"#E0EDE3A1"}}>
            <div className='col-11  d-flex flex-end align-items-center'>
                <img src="./logo.png" style={{height:110,width:100,marginLeft:10}}/>

            </div>
            <div className='col-1 d-flex flex-end align-items-center'>
            <img src="./search.png" style={{height:30,width:30}}/>
            <img   src="./noti.png" style={{height:30,width:30,margin:10}}/>
            <img  src="./op.png" style={{height:30,width:30,margin:10}}/>


                
            </div>
            
            

        </div>
    </div>
  )
}
