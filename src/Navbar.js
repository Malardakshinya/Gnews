import React, { useState } from 'react'


const Navbar = (props) => {
  const handleclick=()=>{
  props.prop(vari)
  console.log(vari)
  }
 const[vari,setvari]= useState(" ")
  const handlechange =(e)=>{
    setvari(e.target.value)
    console.log(e)

  }

  return (
   <div className='nav'>
   
    <div className='title'> THE HINDU</div>
    <div className='category' >
        <ul >
        <li>India</li>
        <li>Worlds</li>
        <li>Budgets 2024</li>
        <li>Movies</li>
        <li>e-paper</li>
        </ul>
        
        </div>
        
        <input type='text' onChange={handlechange}></input>
        <button onClick={handleclick}>search</button>
     </div>
     
    
  )
  
  
}



export default Navbar