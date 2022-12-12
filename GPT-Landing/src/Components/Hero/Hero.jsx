import React from 'react'
import './hero.css'
import { HeroImg, Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6, Avatar7 } from '../../assets/index'
import { CTA } from '../index'

const Profiles = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6, Avatar7];
const Hero = () => {
    return (
        <div className="hero pad">
            <div className="hero__content">
                <h1 className="text__gradient">Let’s Build Something
                    amazing with GPT-3
                    OpenAI</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <form className="hero__input">
                    <input type="text" placeholder="Your Email Address" />
                    <CTA title="Get Started" />
                </form>
                <div className="hero__profiles">

                    <div className="hero__profile">
                        {
                            Profiles.map((profile, index) => {
                                return (
                                    <img src={profile} alt="Profile" key={`Profile ${index + 1}`} />
                                )
                            })
                        }
                        <div>1,600 people requested access a visit in last 24 hours</div>
                    </div>
                </div>
            </div>
            <div className="hero__img">
                <img src={HeroImg} alt="Hero Image" />
            </div>

        </div>
    )
}

export default Hero