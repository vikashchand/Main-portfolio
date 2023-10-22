import React from 'react'
import CV from '../../assets/vikasheresume.pdf'

import {FaDownload} from "react-icons/fa"

const CTA = () => {
  return (
    <div className="cta">
    <a href={CV} download className='btn' >Download CV <FaDownload className='fad-icon' /></a>
   
    </div>
  )
}

export default CTA