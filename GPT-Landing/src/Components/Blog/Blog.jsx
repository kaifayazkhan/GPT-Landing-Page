import React from 'react'
import './blog.css'
import BlogCard from './BlogCard'
import { BlogImg1, BlogImg2, BlogImg3, BlogImg4, BlogImg5 } from '../../assets/index'

const BlogImages = [BlogImg1, BlogImg2, BlogImg3, BlogImg4, BlogImg5];

const Blog = () => {
    return (
        <div className="blog pad">
            <h1 className="text__gradient">A lot is happening,
                We are blogging about it.</h1>
            <div className="blog__cards">
                {
                    BlogImages.map((image, index) => {
                        return <BlogCard key={index} Images={image} />
                    })
                }
            </div>
        </div>
    )
}

export default Blog