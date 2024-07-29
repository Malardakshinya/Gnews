import React from 'react'

const Card = (props) =>
   {
  return (
    <div className='card' key={props.key}>
        <div className='cardimage' > <img src={props.property.image}></img></div>
      <div className='cardcategory'>category</div>
      <div className='cardheadlines' >{props.property.title}</div>  
        </div>
  )
}

export default Card