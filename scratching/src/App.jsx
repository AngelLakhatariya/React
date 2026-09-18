import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import CustomerServices from "./pages/customerservice";
import Sell from "./pages/sell";
import Contacts from "./pages/contacts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/customer-service" element={<CustomerServices />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;