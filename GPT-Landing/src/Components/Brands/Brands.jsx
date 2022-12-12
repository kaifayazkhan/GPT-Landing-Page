import React from 'react'
import './brands.css'
import { Google, Slack, Atlassian, Dropbox, Shopify } from '../../assets/index'

const Brand = [Google, Slack, Atlassian, Dropbox, Shopify];
const Brands = () => {
    return (
        <div className="brands pad">
            {
                Brand.map((brand, index) => {
                    return <img src={brand} alt="Brands" key={index} />
                })
            }
        </div>
    )
}

export default Brands