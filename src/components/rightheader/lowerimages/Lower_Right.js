import React from "react";
import Bitmapfour from "../../../images/Bitmapfour.png";
import whitestar from "../../../images/whitestar.png";

// Right header of Images divide into 4parts upper-I) Upper_leftheader & 2)Upper_Rightheader
// II) lower - Lower_Left & Lower_Right

function Lower_Right() {

  const left_image = {
    backgroundImage: `url(${Bitmapfour})`,
    border:"1px solid white",
    backgroundSize: "cover",
    height:"40vh",
    borderRadius: "2%",
    color: "black",
   
  };
  const header_label = {
    backgroundColor:"#DAD2CB",
    opacity:"0.8",
    height:"22vh",
    marginTop: "110px",
    padding:"10px",
    borderRadius: "2%",
  };  
  const explore_button = {
    background: "transparent",
    borderRadius: "25px",
    color: "black",
    border: "none",
    height: "25px",
    width: "95px",
  };
  const label_inner = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  };
  const label_p = {
    marginBottom: "10px",
  };
  

  const label_child_inner_inner = {
    display: "flex",
    justifyContent: "space-between",
  };
  const rate = {
    marginLeft: "10px",
    color:"black"
  };
  return (
  
      <div className="left_image" style={left_image}>

        <div className="header_label" style={header_label}>
          <h4>Doughnut</h4>
          <p className="label_p" style={label_p}>
            Lorem Ipsum is simply dummy text.
          </p>
          <hr></hr>
          <div className="label_inner" style={label_inner}>
            <div >
              <button className="explore_button" style={explore_button}>
                Explore &gt;
              </button>
            </div>

            <div >
              <div
                className="label_child_inner_inner"
                style={label_child_inner_inner}
              >
                <img src={whitestar} />
                <h5 className="rate" style={rate}>
                  Rated
                </h5>
              </div>
            </div>
          </div>
        </div>

      </div>
    
  );
}

export default Lower_Right;
