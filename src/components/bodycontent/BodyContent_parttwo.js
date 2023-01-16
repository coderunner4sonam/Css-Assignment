import React from "react";

//  BodyContent_parttwo is use to show Details which I have divide into 3 parts -
// 1)Indian Cuisine 2) American Cuisine 3)Indian Cuisine

function BodyContent_parttwo() {
  const bodyContent_parttwo = {
    height: "45vh",
    display: "flex",
    justifyContent: "space-around",
  };
  const bodyContent_parttwo_inner = {
    marginTop: "66px",
    width: "32%",
  };
  return (
    <>
      <div className="bodyContent_parttwo" style={bodyContent_parttwo}>
        {/*  1)Indian Cuisine */}
        <div
          className="bodyContent_parttwo_inner"
          style={bodyContent_parttwo_inner}
        >
          <h2>Indian Cuisine</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's{" "}
          </p>
        </div>
        {/* 2) American Cuisine */}
        <div
          className="bodyContent_parttwo_inner"
          style={bodyContent_parttwo_inner}
        >
          <h2>American Cuisine</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
        </div>
        {/*  3)Indian Cuisine  */}
        <div
          className="bodyContent_parttwo_inner"
          style={bodyContent_parttwo_inner}
        >
          <h2>Indian Cuisine</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default BodyContent_parttwo;
