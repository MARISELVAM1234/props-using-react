import React from 'react'
import "./contact.css";

const Contact = (props) => {
  console.log(props.dynamic);
  return (
    // <div className='main'>
    <div className='img-con'>
      <img src={props.dynamic} alt=""></img>
      <p>{props.dynamic2}</p>
    </div>
    // </div>
  )
}

export default Contact