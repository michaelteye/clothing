import React from 'react'

export default function PopularCard({data}) {
  return (
    <div>
        <div className='popularShirts__cards--card'>
            <div className='popularShirts__cards--card--photo'>
                <img src={data.imageSrc} 
                     alt="popularShirts"
                     className='popularShirts__cards--card--photo--image'
                />
                <div className='popularShirts__cards--card--photo--green'>Save {data.amountToSave}%</div>
            </div>

            <div className='popularShirts__cards--card--text'>
                <div className='popularShirts__cards--card--text--name'>
                    {data.title}
                </div>
                <div class="popularShirts__cards--card--text--price">
                    <div class="popularShirts__cards--card--text--price--main">
                        {data.amount.toLocaleString()}
                    </div>
                    <div class="popularShirts__cards--card--text--price--sub">
                        ${data.discountAmount}
                    </div>
                </div>
            </div>

        </div>


    </div>
  )
}
