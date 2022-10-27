import React from 'react'
import HeadingText from "../components/HeadingText"
import LeagueCard from '../components/LeagueCard'
import {leagueData} from "../data/leagueData"

export default function CountryLeagues() {
  return (
    <div>
        <div className='countryLeagues'>
            <HeadingText text="COUNTRY LEAGUES"/>
            <div className='countryLeagues__cards'>
                {
                    leagueData.map((data, key)=><LeagueCard data={data} key={key}/>)
                }
            </div>

        </div>
    </div>
  )
}
