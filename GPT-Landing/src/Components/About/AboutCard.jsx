import React from 'react'
import './about.css'
import { Line } from '../index'

const AboutCard = ({ Data }) => {
    return (
        <div className="aboutCard">
            <Line />
            <h3>{Data.title}</h3>
            <p>{Data.text} </p>
        </div>
    )
}

export default AboutCard