import React, { useState } from 'react'


export const User = (props) => {
   
  return (
    <>
    <div className='container'>
        <div className='container1'>
        <span className={props.online?'pro online':'pro offline'}>{props.online?'online':'offline'}</span>
        </div>
        <div className='container2'>
        <img  className='img' src={props.profile} alt="" /> </div>
          <div className='container3'>
          <h3>{props.name}</h3>
            <h4>{props.city}</h4>
             <p>{props.role}</p>
       </div>  
        <div className='buttons'>
            <button className='msg-btn'>Message</button>
            <button className='flw-btn'>Follow</button>

        </div>
        <div className="skills">
            <h6>skills</h6>
            <ul>
               {props.skills.map((skill,index)=>(<li key = {index}>{skill}</li>))}
            </ul>
        </div>
      </div>
   </>
 )
 }; 



