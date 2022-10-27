import React from 'react'
import { navItems } from '../data/navData';
import Nav from './Nav';
import searchImg from "../assets/icons/png/search.png"
import pingDown from "../assets/icons/png/down.png"
import globe from "../assets/icons/png/globe.png"
import cartImg from "../assets/icons/png/shopping-cart-white.png"
import userIcon from "../assets/icons/png/user.png"
import { Link } from 'react-router-dom';


export default function Header(){
    return (
        <>
            <div className='header'>
                <div className='header__top'>
                    <div className='header__top--language'>
                        <img src={globe} alt="Globe"
                        className='header__top--language--globe'
                         />
                          EN
                    </div>
                    <div className='header__top--sales'>
                        sales begin - free shipping on all orders
                    </div>
                    <div className='header__top--chat'>chat with us</div>
                </div>

                <div className='header__second'>
                    <div className='header__second--yellow'>&nbsp;</div>
                    <div className='header__second--total'>
                        <div className='header__second--total--top'>
                            <div className='header__second--total--top--category'>
                                <div className='header__second--total--top--category--texts'>
                                    All Categories
                                </div>
                                <img src={pingDown} alt=""
                                className='header__second--total--top--category--icon'
                                 />
                            </div>

                            <div className='header__second--total--top--input'>
                                <input type="text"
                                    className='header__second--total--top--input--searchBox'
                                    placeholder='what are you looking for ?'
                                 />
                                 <button className='header__second--total--top--input--button'>
                                    Search
                                 </button>
                                 <img src={searchImg} 
                                        alt="Search Icon"
                                        className='header__second--total--top--input--icon'
                                         />
                            </div>
                            <div className='header__second--total--top--icons'>
                                <img src={cartImg} 
                                    alt=""
                                    className='header__second--total--top--icons--shopping' 
                                    />
                                
                                <Link to="/product">
                                    <img
                                        src={userIcon}
                                        alt="user"
                                        className="header__second--total--top--icons--user"
                                        />
                                </Link>
                                
                                
                                

                            </div>


                        </div>
                        <Nav navItems={navItems} />



                    </div>

                </div>


            </div>


        </>
    )
}