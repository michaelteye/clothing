import React from 'react'
import bannerImage from '../assets/images/hero.jpg'
import rewardBadge from "../assets/icons/png/rewards-badge.png"
import cartIcon from "../assets/icons/png/bag.png"
import { bannerCardData } from '../data/bannerCardData';
import BannerCard from './BannerCard';
import { Link } from 'react-router-dom';



export default function Banner(){
    return(
        <>
            <div className='banner'>
                    <img src={bannerImage} 
                            alt=""
                            className='banner__image'
                    />
                    <div className='banner__text'>
                        <span className='banner__text--customized'>Your favourite customized</span>
                        <span class="banner__text--jerseys">Club Jerseys.</span>
                    </div>
                <div className='banner__shop'>
                    <div className='banner__shop--text'>Shop Now</div>
                    <img src={cartIcon} alt="" className='banner__shop--bag'/>
                </div>

                <div className='banner__lines'>
                    <div className='banner__lines--yellow'>&nbsp;</div>

                    <div className="banner__lines--whites">
                        <div className="banner__lines--whites--white">&nbsp;</div>
                        <div className="banner__lines--white">&nbsp;</div>
                        <div className="banner__lines--white">&nbsp;</div>
                        <div className="banner__lines--white">&nbsp;</div>
                    </div>
                </div>
            </div>
            {/* woking on the after banner page */}

            <div className='afterBanner'>
                <div className='afterBanner__cards'>
                        {
                            bannerCardData.map((item, key)=> <BannerCard data={item} key={key}/>)
                        }

                </div>
                <Link to="/product">
                    <img
                        src={rewardBadge}
                        alt="Rewards badge"
                        className="afterBanner__rewardsBadge"
                    />
                </Link>
                

            </div>

        </>
    )
}