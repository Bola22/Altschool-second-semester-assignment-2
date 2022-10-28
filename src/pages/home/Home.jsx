import React from 'react'
import {Link} from"react-router-dom"

function Home() {
  return (
    <div className='home'>
      <h1 className='title'>Home page</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ex ab, nam rem voluptas quisquam dolorem. Exercitationem sapiente itaque repudiandae asperiores facere ea similique, quasi voluptates enim cupiditate dolore necessitatibus?</p>
      <Link className='btn' to="users">View users</Link>
    </div>
  )
}

export default Home
