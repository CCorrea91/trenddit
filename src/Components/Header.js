import React from 'react'
import { 
    Link,
    Routes,
    Route
} from 'react-router-dom'
import { Home } from '../Pages/Home'

const Header = () => {

  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>

  return (
      <div className='header'>
        <h1>Trenddit</h1>
        <input
          type='search'
          placeholder='Search Something'
        />

      </div>
  )
}

export default Header