import React, { useEffect, useState } from 'react'
import './header.css'
import { Logo } from '../../assets/index'
import { CTA } from '../index'
import { FiMenu } from 'react-icons/Fi'
import { FaTimes } from 'react-icons/Fa'

const Links = [
    {
        id: 1,
        title: 'Home',
        url: '#'
    },
    {
        id: 2,
        title: 'What is GPT?',
        url: '#'
    },
    {
        id: 3,
        title: 'Open AI',
        url: '#'
    },
    {
        id: 4,
        title: 'Case Studies',
        url: '#'
    },
    {
        id: 5,
        title: 'Library',
        url: '#'
    }
];
const Header = () => {
    const [menu, setMenu] = useState(true);

    useEffect(() => {
        menu ? document.body.style.overflow = 'auto' : document.body.style.overflow = 'hidden'
        menu ? document.body.classList.remove('body__blur') : document.body.classList.add('body__blur');
    }, [menu]);

    return (
        <div className='header pad'>
            <div className="header__logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="header__hambergur">
                {menu ? <FiMenu className="header__menubar" onClick={() => setMenu(false)} /> : <FaTimes className="header__menubar" onClick={() => setMenu(true)} />}

            </div>
            <div className={menu ? "header__menu " : "header__menu visible"}>
                <ul>
                    {
                        Links.map((link) => (
                            <li key={link.id}>
                                <a href={link.url} onClick={() => setMenu(true)}>{
                                    link.title
                                }</a>
                            </li>
                        ))
                    }
                    <div className="mobile__display">
                        <a href="#">Sign In</a>
                        <CTA title="Sign Up" />
                    </div>

                </ul>
            </div>

            <div className="header__cta">
                <a href="#">Sign In</a>
                <CTA title="Sign Up" />
            </div>
        </div>
    )
}

export default Header