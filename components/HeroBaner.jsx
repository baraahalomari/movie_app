import React from 'react'

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div className="hero-banner-text">
        <h3>
          <span>Welcome to </span>
          <span>The</span>
          <span> Best</span>
          <span> Place</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque euismod,
        </p>
        <button>Learn More</button>
      </div>
      <div >
        <img className="hero-banner-image" src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
      </div>


    </div>
  )
}

export default HeroBanner