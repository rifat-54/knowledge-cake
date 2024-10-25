
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/Header/Header'

function App() {
  
  const[bookmarks,setBookmarks]=useState([])

  const [readintTime,setReadingTime]=useState(0);

  const handleReadingTime=(time)=>{
      setReadingTime(readintTime+time);
  }

  const handleAddBookMark=blog=>{
      
      const newBookmark=[...bookmarks,blog];
      setBookmarks(newBookmark);
  }

  return (
    <>
      
      
      <Header></Header>
      <div className='max-w-6xl mx-auto md:flex mt-8  px-4 justify-between gap-4'>
      <Blogs
      handleAddBookMark={handleAddBookMark}
      handleReadingTime={handleReadingTime}
      ></Blogs>
      <Bookmark
      bookmarks={bookmarks}
      readintTime={readintTime}
      ></Bookmark>
      </div>
     
      
    </>
  )
}

export default App
