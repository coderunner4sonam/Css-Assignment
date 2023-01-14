import React from 'react'
import logo from "../images/header.png";

function Header() {
  const Logo={
    width: "13px",
    marginRight: "2px",
    
  }
  const header1={
    display:"flex",
    justifyContent:"center",
    padding:"5px"
  }
  const logo_heading={
    marginLeft:"2px"
  }
  const line={
    boxShadow: "1px solid grey",

  }
  const header2={
    display: "flex",
  justifyContent: "center",
  }

  const varities={
    marginTop:"10px"
  }

  const underline={
    width:"2%",
    margin: "8px auto 0px auto",
    height: "2px",
    border: "1px solid rgb(106,102,161)",
  }
  return (
    <>
      <header className="header1" style={header1}>
        <img src={logo} alt="" className="Logo" style={Logo} />
        <span className="logo_heading" style={logo_heading}>Culinary kitchen</span>
      </header>
      <hr style={line}></hr>
      <section >
        <header className="header2" style={header2}>
          <span className="varities" style={varities}>V A R I E T I E S</span>
        </header>
        <div className="underline" style={underline}></div>
      </section>
     
    </>
  )
}

export default Header
