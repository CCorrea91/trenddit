import React from 'react'
import { 
    Link,
    Routes,
    Route
} from 'react-router-dom'
import { Home } from '../Pages/Home'

const Navigation = () => {

  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>

  return (
      <div className='header'>
        <h1>Trenddit</h1>
        <nav >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        

      </div>
  )
}

export default Navigation