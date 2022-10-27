import React from 'react'

export default function LeagueCard({data}) {
  return (
    <div>
        <div className='countryLeagues__cards--card'>
            <img src={data.image} 
                alt="champions-league"
                className='countryLeagues__cards--card--image'
             />
             <div className='countryLeagues__cards--card--name'>{data.title}</div>
        </div>
    </div>
  )
}
