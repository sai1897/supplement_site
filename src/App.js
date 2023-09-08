import logo from './logo.svg';
import './App.css';
import Menu from './Screens/Menu';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Screens/Login';
import Verify from './Screens/Verify';
import Passf from './Screens/Passf';
import Confirm from './Screens/Confirm';
import Payment from './Screens/Payment';


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





    


    </Route>
  </Routes>
 
</BrowserRouter>
    </div>
  );
}

export default App;
