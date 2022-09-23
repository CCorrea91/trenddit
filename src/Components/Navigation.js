import React from 'react'
import { 
    Link,
    Routes,
    Route
} from 'react-router-dom'
import { Feed } from '../Pages/Feed'

const Navigation = () => {
  return (
      <div className='header'>
        <h1>Trenddit</h1>
        <nav >
          <ul>
            <li>
              <Link to="/">Feed</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </div>
  )
}

export default Navigation