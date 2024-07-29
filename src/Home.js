import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Card from './Card'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Home = () => {
   const[ news,setnews]= useState([])
   const[search,setsearch]=useState('example')
    const met=async() =>{
        try{
      const res= await axios.get(`https://gnews.io/api/v4/search?q=${search}&lang=en&country=us&max=10&apikey=4d2a6c6c9cd63b64a3c217fae48a4dd4`);
        console.log(res.data.articles);
        setnews (res.data.articles);
    }

        catch(e){
            console.log(e);

        }
        
        
    }
    useEffect(()=>{met()},[])
    useEffect(()=>{met()},[search])
    const nav = useNavigate();
    const Handle =(props)=>{
        localStorage.setItem('news',JSON.stringify(props));
        nav('/news')
    }
  return (
    <div>
        <Navbar prop={setsearch}></Navbar>
        <div className='grid'>
            {news.map((item,index)=><div onClick={()=>{Handle(item)}}><Card property={item} key={index}>

</Card> </div>

            )}
            
            
            
        </div>
    </div>
  )
}

export default Home