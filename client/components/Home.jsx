import React from 'react'

const Home = () => {
  return (
    <>
      <div className="container">
        <a href="/about" className="box">
          About
        </a>
        <a href="itemShop" className="box">
          Item Shop
        </a>
        <a href="/news" className="box">
          News
        </a>
        <a href="/crewpack" className="box">
          Current Crewpack
        </a>
        <a href="/locker" className="box">
          Locker
        </a>
        <a href="/additem" className="box">
          Add Item
        </a>
      </div>
    </>
  )
}

export default Home
