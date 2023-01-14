import React from 'react'
import logo from "../images/header.png";
/* .logo{
  width: 13px;
  margin-right: 2px;
}

.header1{
  display: flex;
  justify-content: center;
  margin-top: 1%;
}

.header2{
  display: flex;
  justify-content: center;

}

.underline{
  width: 5%;
  margin: 8px auto 2px auto;
  height: 2px;
  border: 1px solid black;
 
}

.header_images{
  display: flex;
  
}

.uppperright_images{
  flex-direction: column;
} */

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
    margin: "8px auto 2px auto",
    height: "2px",
    border: "1px solid black",
  }
  return (
    <>
      <header className="header1" style={header1}>
        <img src={logo} alt="" className="Logo" style={Logo} />
        <span>Culinary kitchen</span>
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
