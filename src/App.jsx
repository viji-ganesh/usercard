import React from 'react'
import { User} from './User'
import { useState } from 'react';

function App ()  {
  
  const userData = [
    {
      name:'viji',
      profile:'src/img1.jpg',
      city:'Banglore',
      role:'Front end developer',
      online: false,
      skills:['Html','Css','JS','React','Bootstrap']
    },
    {
      name:'Dinesh',
      profile:'src/img2.jpg',
      city:'Hyderabad',
      role:'PHP developer',
      online: true,
      skills:['core PHP','Mysql','sql']
    },
    {
      name:'Raja',
      profile:'src/img3.jpg',
      city:'Chennai',
      role:'Angular developer',
      online: false,
      skills:['Angular','front-end ','JQuery']
    }
  
  ]
  return (
  <>
  {userData.map((user,index)=>(<User key={index}
  name = {user.name}
  city = {user.city}
  role = {user.role}
  online = {user.online}
  profile = {user.profile}
  skills = {user.skills}
  
  
  />))}
  </>
  )
}

export default App