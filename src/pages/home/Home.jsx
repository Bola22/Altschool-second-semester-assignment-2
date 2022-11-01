import React from 'react'
import {Link} from"react-router-dom"

function Home() {
  return (
    <div className='home'>
      <h1 className='title'>Get User Data</h1>
      <p>Click button to see the list of users </p>
      <Link className='btn' to="users">View users</Link>
    </div>
  )
}

export default Home
