import React from "react";
import Bitmapthree from "../../../images/Bitmapthree.png";
import blackstar from "../../../images/blackstar.png";

function Lower_Left() {

  const left_image = {
    backgroundImage: `url(${Bitmapthree})`,
    border:"1px solid white",
    backgroundSize: "cover",
    height:"40vh",
    borderRadius: "2%",
    color: "white",
  };
  const header_label = {
    backgroundColor:"#0A0E0F",
    opacity:"0.8",
    height:"22vh",
    marginTop: "110px",
    padding:"10px",
    borderRadius: "2%",
  };  
  const explore_button = {
    background: "transparent",
    borderRadius: "25px",
    color: "white",
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
    color:"white"
  };
  return (
  
      <div className="left_image" style={left_image}>

        <div className="header_label" style={header_label}>
          <h4>Macaroon</h4>
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
                <img src={blackstar} />
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

export default Lower_Left;
