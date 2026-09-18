import React from "react";
import Contacts from "./Contacts";
import Sell from "./Sell";
import CustomerService from "./CustomerService";
import { Link } from "react-router-dom";

const Home = () => {
  const navLink = [
    { id: 1, page: "Contacts", path: "/contacts" },
    { id: 2, page: "Sell", path: "/sell" },
    { id: 3, page: "Customer Service", path: "/customer-service" },
  ];
  return (
    <div className="home-box">
      {navLink.map((link) => (
        <Link to={link.path} key={link.id}>
          <button>Click to {link.page}</button>
        </Link>
      ))}
    </div>
  );
};

export default Home;
