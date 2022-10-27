import React from 'react'
import socialNetWork from "../assets/images/social-networks.jpg"
import personalizationImage from "../assets/images/personalization.jpg"
import facebookIcon from "../assets/icons/png/facebook-f-black.png"
import twitterIcon from "../assets/icons/png/twitter-black.png"
import instagramIcon from "../assets/icons/png/instagram-black.png"
export default function SubCollection() {
  return (
    <div>
        <div className='beforeFooter'>
            <div className='beforeFooter__cards'>
                <div className='beforeFooter__cards--card'>
                    <img src={personalizationImage}
                         alt="personalization"
                         className='beforeFooter__cards--card--image'
                    />
                    <div className='beforeFooter__cards--card--text'>
                        <span className='beforeFooter__cards--card--text--big'
                        >PERSONALIZATION</span>
                        <br /><br />
                        <span className='beforeFooter__cards--card--text--small'>
                            Put a custom print on the football shirt of your choice with our
                            <br />
                            Personalization service.
                        </span>
                        <br /><br />
                        <div className='beforeFooter__cards--card--text--small'>
                            Tell us what name,what number and we put it.
                            <strong>FREE!</strong>
                        </div>
                    </div>
                </div>
                <div className='beforeFooter__cards--card'>
                    <img src={socialNetWork} 
                       alt="personalization"
                       className='beforeFooter__cards--card--image'
                    />

                    <div className='beforeFooter__cards--card--text'>
                        <span className='beforeFooter__cards--card--text--big'>SOCIAL NETWORKS</span>
                        <br /><br />
                         <span className='beforeFooter__cards--card--text--small'>
                             Share your shirts with us with the #CamisetasFutbolSpainnn
                            <br />
                         </span>
                         <div className='beforeFooter__cards--card--text--socials'>
                            <img src={facebookIcon}
                                 alt="Facebook"
                                 className='beforeFooter__cards--card--text--socials--icon'
                            />
                            <img src={twitterIcon}
                                 alt="instagram"
                                 className='beforeFooter__cards--card--text--socials--icon'
                            />
                            <img src={instagramIcon}
                                 alt="instagram"
                                 className='beforeFooter__cards--card--text--socials--icon'
                            />

                            

                         </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}
