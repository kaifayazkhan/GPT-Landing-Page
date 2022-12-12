import React from 'react'
import { Line } from '../index'
import './future.css'

const FutureCard = ({ Data }) => {
    return (
        <div className="futureCard">
            <div className="futureCard__title">
                <Line />
                <h3>{Data.title} </h3>
            </div>
            <p>{Data.text}</p>
        </div>
    )
}

export default FutureCard