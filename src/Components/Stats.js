import React from 'react';

export const Stats = () => {
  return (
    <>
      <section className='stats-container round-border'>
          <div className='stats'>
            <div className='stats-title'>
              <p>Stats</p>
            </div>
            <div className='stats-info'>
              <p>Information</p>
              <p>Information</p>
              <p>Information</p>
            </div>
          </div>
      </section>
      <div className='score'>
        <p className='score-title'>score</p>
        <p>16950</p>
      </div>
    </>
  )
}

export default Stats