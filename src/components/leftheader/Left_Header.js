import React from "react";
import Bitmap from "../../images/Bitmap.png";
import purplestar from "../../images/purplestar.png";

function Left_Header() {

  const left_image = {
    backgroundImage: `url(${Bitmap})`,
    border:"1px solid white",
    backgroundSize: "cover",
    height: "80vh",
    borderRadius: "2%",
    color: "white",
   
  };
  const header_label = {
    backgroundColor:"#54396F",
    opacity:"0.9",
    height: "203px",
    border:"1px solid black",
    marginTop: "292px",
    padding:"10px",
    borderRadius: "2%",
  };  
  const explore_button = {
    background: "transparent",
    borderRadius: "25px",
    color: "white",
    border: "solid 0.5px white",
    height: "35px",
    width: "105px",
  };
  const label_inner = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "35px",
  };
  const label_p = {
    marginBottom: "35px",
  };
  

  const label_child_inner_inner = {
    display: "flex",
    justifyContent: "space-between",
  };
  const rate = {
    marginLeft: "10px",
  };
  return (
  
      <div className="left_image" style={left_image}>

        <div className="header_label" style={header_label}>
          <h4>Pizza is a savary dish of Italian origin</h4>
          <p className="label_p" style={label_p}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
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
                <img src={purplestar} />
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

export default Left_Header;
