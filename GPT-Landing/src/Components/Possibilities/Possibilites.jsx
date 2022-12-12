import React from 'react'
import './possibilites.css'
import { PossibilitesImg } from '../../assets/index'

const Possibilites = () => {
    return (
        <div className='possibilites pad'>
            <div className="possibilites__image">
                <img src={PossibilitesImg} alt="Background Image" />
            </div>
            <div className="possibilites__content">
                <p className="text__cyan">Request Early Access to Get Started</p>
                <h2 className="text__gradient">The possibilities are beyond your imagination</h2>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <p className="text__orange">Request Early Access to Get Started</p>
            </div>
        </div>
    )
}

export default Possibilites