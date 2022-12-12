import React from 'react'
import './blog.css'

const BlogCard = ({ Images }) => {
    return (
        <div className="blog__card">
            <div>
                <img src={Images} alt="Blog Images" />
                <div className="blog__content">
                    <p>Sep 26, 2021</p>
                    <h3>GPT-3 adn Open AI is the future. Let us explore how it is?</h3>
                </div>
            </div>
            <a href="#">Read Full Article</a>
        </div>
    )
}

export default BlogCard