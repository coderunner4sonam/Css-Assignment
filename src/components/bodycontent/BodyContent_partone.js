import React from "react";


function BodyContent_partone() {
  const container_style={
    height:"60vh",
    border:"1px solid black",
    display:"flex",
    justifyContent:"space-around",
    marginTop:"18px"
  }

  const container_leftstyle={
    width:"48%",
    backgroundColor:"red"
  }

  const container_rightstyle={
    flexWrap:"wrap",
    width:"48%",
    backgroundColor:"green",
    display:"flex",
    justifyContent:"space-around"
  }

  const container_rightstyle_inner={
    width:"48%",
    margin:"6px",
    backgroundColor:"yellow",
    height:"26vh",
    border:"1px solid black"
  }

  return (
 <>
      <div className="container" style={container_style}>
        <div className="left_container" style={container_leftstyle}>
      </div>
        <div className="right_container" style={container_rightstyle}>
          <div className="right_container_inner" style={container_rightstyle_inner}></div>
          <div className="right_container_inner" style={container_rightstyle_inner}></div>
          <div className="right_container_inner" style={container_rightstyle_inner}></div>
          <div className="right_container_inner" style={container_rightstyle_inner}></div>
        </div>
      </div>
      </>
  );
}

export default BodyContent_partone;
