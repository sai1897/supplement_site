import logo from './logo.svg';
import '/home/cogncise/React/suppliment/src/App.css';
import Menu from './Screens/Menu';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Screens/Login';
import Verify from './Screens/Verify';
import Passf from './Screens/Passf';
import Confirm from './Screens/Confirm';
import Payment from './Screens/Payment';
import Navbar from './Screens/Navbar';

import Quotes from './Dashboard/Orders/Quotes';
import Refund from './Dashboard/Orders/Refund';

import Customers from "./Dashboard/Customers/Customers";
import Dash  from "./Dashboard/Dash";

import Orders from "/home/cogncise/React/suppliment/src/Dashboard/Orders/Orders.js";

import Upcomming from './Dashboard/Orders/Upcoming';

import Reports from "./Dashboard/Reports";
import Umangement  from "./Dashboard/Umanagement"

import Search from './Dashboard/Customers/Search';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
  <Routes>
    <Route path="/" >
      <Route index element={<Login />} />
      <Route path="verify" element={<Verify />} />
      <Route path="pass" element={<Passf />} />
      <Route path="confirm" element={<Confirm />} />
      <Route path="payment" element={<Payment />} />
      <Route path="nav" element={<Navbar />} />
      <Route path="menu" element={<Menu />} />
      {/* <Route path="passf" element={<Passf />} /> */}




      <Route path="customers" element={<Customers />} />
      <Route path="search" element={<Search />} />

      
      <Route path="dashboard" element={<Dash />} />


      <Route path="orders" element={<Orders />} />
      <Route path="upcoming" element={<Upcomming />} />
      <Route path="refunds" element={<Refund />} />







      <Route path="reports" element={<Reports />} />
      <Route path="user" element={<Umangement />} />

      <Route path="quotes" element={<Quotes />} />








    


    </Route>
  </Routes>
 
</BrowserRouter>
    </div>
  );
}

export default App;
