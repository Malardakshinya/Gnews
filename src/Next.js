import React from 'react'
import Navbar from './Navbar'

const Next = () => {
    const news=JSON.parse(localStorage.getItem('news'));
  return (
    <div> <Navbar></Navbar>
    <div className='edit'>
        <div className='nexttitle'>{news.title}</div>
        <div className='nextimg'><img src={news.image}/></div>
        <div className='nextcontent'><h1>Description:</h1><p>{news.content}</p></div>
        <div className='nextp'><h6>{`Published At:${news.publishedAt}`}</h6></div>
        <div className='nexts'><h6>Source:</h6>{news.source.name}</div>
    </div>
    </div>
  )
}

export default Next