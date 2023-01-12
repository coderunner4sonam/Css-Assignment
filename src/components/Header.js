import React from "react";
import logo from "../images/header.png";
import '../App.css';
import Left_Header from "./leftheader/Left_Header";

function Header() {
  return (
    <div>
      <header className="header1">
        <img src={logo} alt="" className="logo" />
        <span>Culinary kitchen</span>
      </header>
      <hr></hr>
      <section>
        <header className="header2">
          <span>VARIETIES</span>
        </header>
        <div className="underline"></div>
      </section>
      <section className="header_images">
        <Left_Header/>
        <div className="right_images">
            <div></div>
           
            <div></div>
        </div>
      </section>
    </div>
  );
}

export default Header;
