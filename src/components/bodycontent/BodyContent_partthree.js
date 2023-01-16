import React from 'react'
import leftlady from "../../images/leftlady.png"
import Menpic from "../../images/Menpic.png"
import rightlady from "../../images/rightlady.png"
import imagetwo from "../../images/imagetwo.png"
import "../../App.css";
import Mask from "../../images/Mask.png"

function BodyContent_partthree() {
    const header2={
      display: "flex",
      justifyContent: "center",
      }

    const varities={
        marginTop:"10px",
        letterSpacing: "5px",
      }
    
      const underline={
        width:"3%",
        margin: "8px auto 2px auto",
        height: "2px",
        border: "1px solid rgb(106,102,161)",
      }
      const bodyContent_partthree={
        height:"45vh",
        display:"flex",
        justifyContent:"space-around",
        marginTop:"18px",
        backgroundColor:"red",
        backgroundImage: `url(${imagetwo})`,
        backgroundSize:"cover"
    }

    const bodyContent_partthree_inner_one={
        
        width:"28%",
        color:"white"
    }
    
    const bodyContent_partthree_inner_inner={
      width:"65px",
      height:"65px",
      borderRadius:"50%",
      marginTop:"50px",
      marginLeft:"120px"
    }
    const parent_background={
      paddingTop:"30px",
      paddingRight:"20px",
      paddingBottom:"40px",
      paddingLeft:"20px",
      backgroundColor:"white",
      marginTop:"22px",
      borderRadius:"20px",
      display:"flex",
      flexDirection:"column",
      alignItems: 'center',
      justifyContent:"space-between"
    }

    const parthtree_label_heading={
      marginLeft:"26%"
    }
    const parthtree_label_para={
      marginLeft:"23%"
    }
    const parthtree_label_para2={
      marginLeft:"12%"
    }
    const parthtree_label_para3={
      marginLeft:"26%"
    }
    const bodyContent_partthree_inner_inner2={
      width:"65px",
      height:"65px",
      borderRadius:"50%",
     
    }
  return (
    <>
        <section >
        <header className="header2" style={header2}>
          <span className="varities" style={varities}>TOP <span>CHEFS</span></span>
        </header>
        <div className="underline" style={underline}></div>
      </section>
      <div className='bodyContent_partthree' style={bodyContent_partthree}>
        <div className='bodyContent_partthree_inner_one' style={bodyContent_partthree_inner_one}>
          <img src={leftlady} alt="Notebook" className='bodyContent_partthree_inner_inner' style={bodyContent_partthree_inner_inner}/>
          <h4 className='parthtree_label_heading' style={parthtree_label_heading}>Eileen Johnson</h4>
          <p className='parthtree_label_para' style={parthtree_label_para}>Executive Chef,USA</p>
        </div>

        <div >
          <div className='parent_background' style={parent_background}>
          <img src={Menpic} alt="Notebook" className='bodyContent_partthree_inner_inner2' style={bodyContent_partthree_inner_inner2}/>
            <h4 >Robert Dowery Jr</h4>
            <p >Lorem Ipsum is simply dummy text of the printing  </p>
            <p >and typesetting industry. </p>
          </div>
        </div>
        
        <div className='bodyContent_partthree_inner_one' style={bodyContent_partthree_inner_one}>
          <img src={rightlady} alt="Notebook" className='bodyContent_partthree_inner_inner' style={bodyContent_partthree_inner_inner}/>
          <h4 className='parthtree_label_heading' style={parthtree_label_heading}>Amanda Dority</h4>
          <p className='parthtree_label_para' style={parthtree_label_para3}>Sous Chef,India</p>
        </div>
    </div>
    </>
  )
}

export default BodyContent_partthree
