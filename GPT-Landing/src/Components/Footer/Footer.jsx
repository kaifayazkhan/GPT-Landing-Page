import React from 'react'
import './footer.css'
import { Logo } from '../../assets/index'

const Links = [
    {
        id: 1,
        title: 'Links',
        menu: [
            {
                id: "Overons",
                title: "Over ons",
                path: '#'
            },
            {
                id: "Contact",
                title: "Contact",
                path: '#'
            },
            {
                id: "Privacy",
                title: "Privacy",
                path: '#'
            },
            {
                id: "Counters",
                title: "Counters",
                path: '#'
            },
            {
                id: "Contact",
                title: "Contact",
                path: '#'
            },
        ]
    },
    {
        id: 2,
        title: 'Company',
        menu: [
            {
                id: "Terms & Conditions",
                title: "Terms & Conditions",
                path: '#'
            },
            {
                id: 'Privacy Policy',
                title: 'Privacy Policy',
                path: '#'

            },
            {
                id: 'Contact',
                title: 'Contact',
                path: '#'
            }]
    },
    {
        id: 3,
        title: 'Get in touch',
        menu: [
            {
                id: "Crecterwoord",
                title: 'Crechterwoord K12 182 DK Alknjkcb',
                path: '#'
            },
            {
                id: "085-132567",
                title: '085-132567',
                path: '#'
            },
            {
                id: "info@payme.net",
                title: 'info@payme.net',
                path: '#'
            }
        ]
    }
];

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="footer pad">
            <div className="footer__text">
                <h1 className="text__gradient">Do you want to step in to the future before others</h1>
                <a href="#">Request Early Access</a>
            </div>
            <div className="footer__links">
                <div className="footer__link">
                    <img src={Logo} alt="Logo" />
                    <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                </div>

                {Links.map((link) => {
                    const { id, title, menu } = link;
                    return (
                        <div className="footer__link" key={id}>
                            <h3>{title}</h3>
                            <ul>
                                {menu.map((item) => {
                                    const { id, title, path } = item;
                                    return (
                                        <li key={id}>
                                            <a href={path
                                            }>{title}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>)
                })}
            </div>
            <p>© {year} GPT-3. All rights reserved.</p>
        </div>
    )
}

export default Footer
