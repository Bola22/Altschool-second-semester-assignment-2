import React from 'react'
import useFetch from '../../hooks/useFetch';
import {Link, useParams } from "react-router-dom"

function User() {

    const {userId} = useParams()
    const {data } = useFetch('https://randomuser.me/api/?results=10')
    // const userData = data.find((userData) => data.id.value === userId)
    // const userData =data?.filter(val => val.login.uuid === userId);
  return (
    <div>
      <div className="usersProfile"> 
      <h1 className='title'>User Profile</h1>
      <Link to={-1} className="btn" style={{marginBottom : "50px"}}>Back</Link>
      /
          {/* {data.map((item) => {
            return (
              <div key={item.id.value} className="profile">
                <img src={item.picture.medium} className="profileImg" alt="" />
                <div className="userInfo">
                  <div className="userName">
                  <p className="name">
                    {item.name.last} {item.name.first}
                  </p>
                  </div>
                  <div className="userdata">
                    <p className="email">{item.email}</p>
                  </div>
                </div>
              </div>
            );
          })} */}
    </div>      
    </div>
  )
}

export default User
