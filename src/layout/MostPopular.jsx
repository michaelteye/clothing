import React from 'react'
import HeadingText from "../components/HeadingText"
import PopularCard from '../components/PopularCard'
import {popularData} from "../data/popularData"

export default function MostPopular(){
    return (
       <div className='popularShirts'>
        <div className='popularShirts__text'>
            <span>
                { <HeadingText text="MOST POPULAR T-SHIRTS"/>}
            </span>
        </div>
        <div className='popularShirts__cards'>
            {
                popularData.map((data, key)=> <PopularCard data={data} key={key}/>)
            }
        </div>

       </div> 
    )
}