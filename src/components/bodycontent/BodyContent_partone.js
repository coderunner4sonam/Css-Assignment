import React from "react";
import Left_Header from "../leftheader/Left_Header";
import Lower_Left from "../rightheader/lowerimages/Lower_Left";
import Lower_Right from "../rightheader/lowerimages/Lower_Right";
import Upper_leftheader from "../rightheader/upperimages/Upper_leftheader";
import Upper_Rightheader from "../rightheader/upperimages/Upper_Rightheader";

// BodyContent_partone is divided into 2 parts - I) left header II) Right header

function BodyContent_partone() {
  const header_parent = {
    display: "flex",
    justifyContent: "space-around",
    height: "80vh",
  };
  const header_child = {
    width: "50%",
  };

  const upper = {
    display: "flex",
    justifyContent: "space-around",
    height: "38vh",
  };
  const upper_right_images = {
    height: "36vh",
    width: "48%",
  };

  const lower = {
    display: "flex",
    justifyContent: "space-around",
    height: "47vh",
    marginTop: "14px",
  };
  const lower_right_images = {
    height: "42vh",
    width: "48%",
  };

  return (
    <div className="header_parent" style={header_parent}>
      {/* Images of header divided into 2 parts left header & right header */}
      <div className="header_child" style={header_child}>
        {/* left header */}
        {/* This is the Left image header */}
        <Left_Header />
      </div>

      {/* right header */}
      <div className="header_child" style={header_child}>
        {/* Right Image of header part divided into upper & lower parts */}
        <div className="upper" style={upper}>
          <div className="upper_right_images" style={upper_right_images}>
            <Upper_leftheader />
          </div>
          <div className="upper_right_images" style={upper_right_images}>
            <Upper_Rightheader />
          </div>
        </div>
        <div className="lower" style={lower}>
          <div className="lower_right_images" style={lower_right_images}>
            <Lower_Left />
          </div>
          <div className="lower_right_images" style={lower_right_images}>
            <Lower_Right />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyContent_partone;
