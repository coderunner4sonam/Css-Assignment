import React from 'react'
import Ellipse from '../../images/Ellipse.png'
import carrot from '../../images/carrot.png'
import apple from '../../images/apple.png'
import mango from '../../images/mango.png'
import leaf from '../../images/leaf.png'
import FoodBanner from '../../images/FoodBanner.png'

function BodyContent_partfour() {
    const header2={
        display: "flex",
      justifyContent: "center",
      }
    
      const varities={
        marginTop:"25px",
        letterSpacing: "5px",
      }
    
      const underline={
        width:"5%",
        margin: "8px auto 2px auto",
        height: "2px",
        border: "1px solid rgb(106,102,161)",
      }

    const bodyContent_parttwo={
        height:"140vh",
        border:"1px solid rgb(246,255,254)",
        backgroundImage: `url(${FoodBanner})`,
        backgroundSize:"contain"
    }
   
    
    const bodyContent_partfour={
        // height:"80vh",
    }
    const bodyContent_partfour_inner_parent={
      display:"flex",
      justifyContent:"space-evenly",
      border: "rgb(246,255,254) 1px solid",
      height:"140vh",
      alignItem:"center"
    }
    const bodyContent_partfour_inner_child_one={
      
      width:"25%",
      border: "rgb(246,255,254) 1px solid",
      height:"140vh",
    }
    const bodyContent_partfour_inner_child_middle={
      
      width:"48%",
      border: "rgb(246,255,254) 1px solid",
      height:"140vh",
    }
    const inner_child_one_image1={
      
      width:"38%",
      border: "rgb(246,255,254) 1px solid",
      height:"25vh",
      backgroundImage: `url(${carrot})`,
      backgroundRepeat:"no-repeat",
      marginTop:"41%",
      marginLeft:"35%",
    }
    const inner_child_one_image2={
      
      width:"38%",
      border: "rgb(246,255,254) 1px solid",
      height:"25vh",
      backgroundImage: `url(${apple})`,
      backgroundRepeat:"no-repeat",
      marginTop:"51%",
      marginLeft:"35%",
    }
    const inner_child_one_image3={
      
      width:"38%",
      border: "rgb(246,255,254) 1px solid",
      height:"25vh",
      backgroundImage: `url(${mango})`,
      backgroundRepeat:"no-repeat",
      marginTop:"41%",
      marginLeft:"45%",
    }
    const inner_child_one_image4={
      
      width:"38%",
      border: "rgb(246,255,254) 1px solid",
      height:"25vh",
      backgroundImage: `url(${leaf})`,
      backgroundRepeat:"no-repeat",
      marginTop:"51%",
      marginLeft:"45%",
    }

    const label1={
      marginTop:"85%",
      marginLeft:"16%"
    }
    const label2={
      marginLeft:"16%",
    }
    const label3={
      marginLeft:"15%",
    }
    const label2_image3={
      marginLeft:"20%",
    }
    const label2_image4p={
      marginLeft:"20%",
    }
    const label2_image4={
      marginLeft:"25%",
    }
  return (
    <>
      
      <div className='bodyContent_parttwo' style={bodyContent_parttwo}>
      <section >
        <header className="header2" style={header2}>
          <span className="varities" style={varities}>FOOD <span>GUIDE</span></span>
        </header>
        <div className="underline" style={underline}></div>
      </section>
      <div className='bodyContent_partfour_inner_parent' style={bodyContent_partfour_inner_parent}>
          <div className='bodyContent_partfour_inner_child_one' style={bodyContent_partfour_inner_child_one}>
   
                <div className='inner_child_one_image1' style={inner_child_one_image1}>
                  <div className="label1" style={label1}>
                    <h5>VEGETABLES </h5>
                  </div>
                </div>  
                <p className="label2" style={label2}>Lorem Ipsum is simply dummy text  </p>
               
        
            <div className='inner_child_one_image2' style={inner_child_one_image2}>
            <div className="label1" style={label1}>
                <h5>VEGETABLES</h5>
              </div>
            </div>
            <p className="label2" style={label2}>Lorem Ipsum is simply dummy text   </p>
          
          </div>
            
          <div className='bodyContent_partfour_inner_child_middle' style={bodyContent_partfour_inner_child_middle}></div>
          <div className='bodyContent_partfour_inner_child_one' style={bodyContent_partfour_inner_child_one}>
            <div className='inner_child_one_image3' style={inner_child_one_image3}>
              <div className="label1" style={label1}>
                <h5>VEGETABLES</h5>
              </div>
             
            </div>
            <p className="label2_image3" style={label2_image3}>Lorem Ipsum is simply dummy text   </p>
              
            <div className='inner_child_one_image4' style={inner_child_one_image4}>
              <div className="label1" style={label1}>
                <h5>VEGETABLES</h5>
              </div>
            </div>
            <p className="label2_image4p" style={label2_image4p}>Lorem Ipsum is simply dummy text   </p>
            
          </div>
      </div>
  
    </div>

    <div className='bodyContent_partfour' style={bodyContent_partfour}></div>
    </>
  )
}

export default BodyContent_partfour
