import React from 'react'
import './about.css'
import { Line, AboutCard } from '../index'

const Data = [
    {
        id: 1,
        title: 'Chatbots',
        text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought.'
    },
    {
        id: 2,
        title: 'Knowledgebase',
        text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
    },
    {
        id: 3,
        title: 'Education',
        text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
    }
];

const About = () => {
    return (
        <div className="about">
            <div className="about__GPT">
                <Line />
                <h3>What is GPT-3</h3>
                <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
            </div>
            <div className="about__possibilities">
                <h2 className='text__gradient'>The possibilities are beyond your imagination</h2>
                <p className="text__orange">Explore The Library</p>
            </div>
            <div className="about__cards">
                {
                    Data.map((item) => {
                        return (
                            <AboutCard key={item.id} Data={item} />
                        )
                    })
                }
            </div>
            <div className="about__gradient"></div>
        </div>
    )
}

export default About