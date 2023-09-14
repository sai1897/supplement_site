
    import React from "react";
    import "../Admin.css";
    import useBearStore from "../Store/Store.js";
    import "../App.css"
    import Navbar from "../Screens/Navbar";
    import Menu from "../Screens/Menu";
    
    const Dash = () => {
        const st = useBearStore()
    
        return (
    
            <div>
                   
            <Navbar/>
            <div><Menu/></div>
           
     
    
            <div class="wrapper "  >
    
               
                <div class="container">
    
                    <span class="num" data-val="400">000</span>
                    <span class="text">Total Orders</span>
                </div>
    
                <div class="container">
    
                    <span class="num" data-val="340">000</span>
                    <span class="text">Total Sales</span>
                </div>
    
                <div class="container">
    
                    <img class="imgclass" style={{ width: 100, height: 90 }} src="./web.png" />
                    <span class="text">Web Orders</span>
                </div>
    
                <div class="container">
    
                    <img style={{ width: 100, height: 90 }} src="./dashuser.png" />
                    <span class="text">View Logged in Users</span>
                </div>
    
                <div class="container">
    
                    <img style={{ width: 100, height: 70 }} src="./revenue.png" />
                    <span class="text">Revenue</span>
                    <div class="dropdown">
                        <button class="dropbtn">Sort<i class="arrow down"></i></button>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
    
                        </div>
                    </div>
    
                </div>
    
    
                </div>
    
            </div>
           
        );
    };

    export default Dash;
    