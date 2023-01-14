import React from 'react'
import "./right.css"
import Bitmapfour from "../../../images/Bitmapfour.png"

function Right() {
  return (
    <div>
       <div className="container">
          <img src={Bitmapfour} alt="Notebook" className='leftheader_image'/>
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

export default Right
