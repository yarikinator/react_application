import React from 'react'
import './../header/header.css'
function Header() {
  return (
    <header>
      <div className='container'>
        <nav>
          <u className='list'>
            <li className='list-item'><a href='/Form'>Posts</a></li>
            <li className='list-item'><a href='Dialog'>Dialog</a></li>
          </u>
        </nav>
      </div>
    </header>
  )
}

export default Header
