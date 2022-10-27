import React from 'react'


export default function CollectionCard({data}) {
  return (
    <div>
        <div className='otherCollections__cards--card'>
            <img src={data.image}
             alt="kids" 
             className='otherCollections__cards--card--image' />

            <div className='otherCollections__cards--card--image--blur'>
                <div className='otherCollections__cards--card--blur--text'>
                    {data.title}
                </div>
                <img src={data.image} 
                    alt="right icon"
                    className='otherCollections__cards--card--image--blur--icon'
                 />

            </div>
        </div>
       
    </div>
  )
}
