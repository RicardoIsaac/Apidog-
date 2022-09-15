import React from "react"
import Got from "../../Got.mp3"


const Footer = () => {
    return (
    <div className="fff">
  <div className="audio-player-container">
  <audio controls autoPlay className="audioinput">
      <source src={Got}  type="audio/mpeg"/>
  </audio>
  </div>

  </div>
    )
}
export default Footer;