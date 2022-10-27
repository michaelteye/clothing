import React from 'react'

export default function BannerCard({data}) {
  return (
    <>
         <div className='afterBanner__cards--card'>
            <div className='afterBanner__cards--card--text'>
                    {data.title}
                <span className='afterBanner__cards--card--text--span'>
                    {data.otherInfo}
                </span>
            </div>
            <img src={data.image} alt="" className='afterBanner__cards--card--icon' />

         </div>
    </>
   
  )
}
