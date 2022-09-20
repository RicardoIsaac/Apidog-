import React from "react"
import Headercat from "../Header/Headercat"
import "../Styles/Styles.css"
export default function Creditscat() {
    return (
        <div>
            <div>
              <Headercat/>  
            </div>
            <div className="Creditbody">
                <div className="Creditsproyect">
                    <h1>Este proyecto fue realizado con</h1>
                </div>
                <div className="imgrow">
                    <img className="creditimage" src="https://i.imgur.com/BHwDsEN.png" alt="" />
                    <img className="creditimage" src="https://i.imgur.com/bOWEH9b.png" alt="" />
                    <img className="creditimage" src="https://i.imgur.com/2wcFEZJ.png" alt="" />
                    <img className="creditimage" src="https://i.imgur.com/neCvJ3B.png" alt="" />
                </div>
                <div className="imgrow">
                    <img className="creditimage" src="https://i.imgur.com/nYFXVPv.png" alt="" />
                    <img className="creditimage" src="https://i.imgur.com/K2AF4n0.png" alt="" />
                    <img className="creditimage" src="https://i.imgur.com/CXCogff.png" alt="" />
                </div>
                <div className="Mascotas">
                    <h1>En honor a mis queridas mascotas</h1>
                    <div className="mascotasrow">
{/*//////////////////////////////////////////////////*/}
                        <div className="card">
                            <div className="flip-card">
                                <div className="card-front">
                                    <img className="img" src={"https://i.imgur.com/0dkGGj2.jpg"} alt={"Romina"} />
                                </div>
                                <div className="card-back">
                                    <div>Nombre: Romina</div>
                                    <div>Raza: Yorki </div>
                                </div>
                            </div>
                        </div>
{/*//////////////////////////////////////////////////*/}
<div className="card">
                            <div className="flip-card">
                                <div className="card-front">
                                    <img className="img" src={"https://i.imgur.com/JLzhWYW.jpg"} alt={"Iker"} />
                                </div>
                                <div className="card-back">
                                    <div>Nombre: Iker</div>
                                    <div>Raza: Yorki </div>
                                </div>
                            </div>
                        </div>
{/*//////////////////////////////////////////////////*/}
<div className="card">
                            <div className="flip-card">
                                <div className="card-front">
                                    <img className="img" src={"https://i.imgur.com/cXG1lRX.jpg"} alt={"Emma"} />
                                </div>
                                <div className="card-back">
                                    <div>Nombre: Emma</div>
                                    <div>Raza: Pitbull </div>
                                </div>
                            </div>
                        </div>
{/*//////////////////////////////////////////////////*/}
                    </div>
                    <div></div>
                  
                    <div className="mascotasrow">
{/*//////////////////////////////////////////////////*/}
<div className="card">
                            <div className="flip-card">
                                <div className="card-front">
                                    <img className="img" src={"https://i.imgur.com/NfBV7BG.jpg"} alt={"Lala"} />
                                </div>
                                <div className="card-back">
                                    <div>Nombre: Lala</div>
                                </div>
                            </div>
                        </div>
{/*//////////////////////////////////////////////////*/}
<div className="card">
                            <div className="flip-card">
                                <div className="card-front">
                                    <img className="img" src={"https://i.imgur.com/nOUpJrc.jpg"} alt={"Maya"} />
                                </div>
                                <div className="card-back">
                                    <div>Nombre: Maya</div>
                                </div>
                            </div>
                        </div>
{/*//////////////////////////////////////////////////*/}
<div className="card">
                            <div className="flip-card">
                                <div className="card-front">
                                    <img className="img" src={"https://i.imgur.com/qfjqCGe.jpg"} alt={"Paca"} />
                                </div>
                                <div className="card-back">
                                    <div>Nombre: Paca</div>
                                </div>
                            </div>
                        </div>
{/*//////////////////////////////////////////////////*/}
                    </div>
                </div>
            </div>
        </div>
    )
}