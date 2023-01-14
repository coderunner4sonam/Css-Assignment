import React from 'react'
import "./leftheader.css"
import Bitmapone from "../../../images/Bitmapone.png"

function Leftheader() {
  return (
    <div>
       <div className="container">
          <img src={Bitmapone} alt="Notebook" className='leftheader_image'/>
          <div className="content">
            <h1>Pizza is a savage dish of italian origin</h1>
            <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
            <hr/>
            <div className="rate">
              <button className="explore_button" >explore </button>

              <div>rate</div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Leftheader
