import React from 'react'
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import twitter from "../images/twitter.png"


function Footer() {
    const bodyContent_parttwo={
        height:"5vh",
        display:"flex",
        justifyContent:"center",
        marginTop:"18px",
        backgroundColor:"white"
    }
 
    const footer_image1={
      width: "45px",
      border: "1px solid grey",
      borderRadius: "50%",
      marginRight:"20px"
    }

    const footer_image2={
      width: "46px",
      height:"50px",
      border: "1px solid grey",
      borderRadius: "50%",
      marginRight:"20px",
   
    }

    const footer_image3={
      width: "46px",
      height:"49px",
      border: "1px solid grey",
      borderRadius: "50%",
      marginRight:"20px"
    }

  return (
    <div>
       <div className='bodyContent_parttwo' style={bodyContent_parttwo}>
        <span className='bodyContent_parttwo_inner' >
          <img src={facebook}  style={footer_image1} className="footer_image"/>
        </span>
        <span className='bodyContent_parttwo_inner' >
          <img src={instagram}  style={footer_image2} className="footer_image"/>
        </span>
        <span className='bodyContent_parttwo_inner' >
          <img src={twitter}  style={footer_image3} className="footer_image"/>
        </span>
    </div>
    </div>
  )
}

export default Footer
