import React from 'react'
import NavItem from './Item'

export default function Nav({navItems}) {
  return (
    <>
        <div className='header__second--total--down'>
            <ul className='header__second--total--down--ul'>
                {
                navItems.map((item, key) =>{return <NavItem key={key} item={item} />
                })}
            </ul>

        </div>
    </>
    
  )
}
