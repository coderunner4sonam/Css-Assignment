import React from "react";
import Left_Header from "../leftheader/Left_Header";
import Lower_Left from "../rightheader/lowerimages/Lower_Left";
import Lower_Right from "../rightheader/lowerimages/Lower_Right";
import Upper_leftheader from "../rightheader/upperimages/Upper_leftheader";
import Upper_Rightheader from "../rightheader/upperimages/Upper_Rightheader";


function BodyContent_partone() {

    const header_parent={
      display:"flex",
      justifyContent:"space-around",
      height:"80vh"
    }
    const header_child={
      width:"50%"
    }
   
    const upper={
      display:"flex",
      justifyContent:"space-around",
      height:"38vh",
    
     
    }
    const upper_right_images={
      height:"36vh",
      width:"47%",
     
    }

    const lower={
      display:"flex",
      justifyContent:"space-around",
      height:"47vh",
      width:"100%",
      marginTop:"14px"
    }
    const lower_right_images={
      height:"42vh",
      width:"47%",
    
     
    }
    
    
  return(
    <div className="header_parent" style={header_parent}>

      <div className="header_child" style={header_child}>
          <Left_Header />
      </div>
      <div className="header_child" style={header_child}>
        
          <div className="upper" style={upper}>
            <div className="upper_right_images" style={upper_right_images}>
                <Upper_leftheader/>
            </div>
            <div className="upper_right_images" style={upper_right_images}>
                <Upper_Rightheader/>
            </div>
          </div>
          <div className="lower" style={lower}>
            <div className="lower_right_images" style={lower_right_images}>
              <Lower_Left/>
            </div>
            <div className="lower_right_images" style={lower_right_images}>
              <Lower_Right/>
            </div>
          </div>
  
      </div>

    </div>
  )
}

export default BodyContent_partone;
