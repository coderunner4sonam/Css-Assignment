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
        marginTop:"10px"
      }
    
      const underline={
        width:"2%",
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
      borderRadius:"45%",
      marginTop:"50px",
      marginLeft:"120px"
    }
    const parent_background={
      backgroundImage: `url(${Mask})`,
      borderRadius:"8%",
      width:"320px",
      height:"200px"
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

  return (
    <>
        <section >
        <header className="header2" style={header2}>
          <span className="varities" style={varities}>T O P  C H E F S</span>
        </header>
        <div className="underline" style={underline}></div>
      </section>
      <div className='bodyContent_partthree' style={bodyContent_partthree}>
        <div className='bodyContent_partthree_inner_one' style={bodyContent_partthree_inner_one}>
          <img src={leftlady} alt="Notebook" className='bodyContent_partthree_inner_inner' style={bodyContent_partthree_inner_inner}/>
          <h4 className='parthtree_label_heading' style={parthtree_label_heading}>Eileen Johnson</h4>
          <p className='parthtree_label_para' style={parthtree_label_para}>Executive Chef,USA</p>
        </div>

        <div className='parent_background' style={parent_background}>
          
          <img src={Menpic} alt="Notebook" className='bodyContent_partthree_inner_inner' style={bodyContent_partthree_inner_inner}/>
            <h4 className='parthtree_label_heading' style={parthtree_label_heading}>Robert Dowery Jr</h4>
            <p className='parthtree_label_para' style={parthtree_label_para2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
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
