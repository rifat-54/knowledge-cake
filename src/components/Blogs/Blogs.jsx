import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';


const Blogs = ({handleAddBookMark,handleReadingTime}) => {

    const[blog,setBlog]=useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlog(data))
    },[])

    return (
        <div className='w-2/3'>
            <h2 className='text-3xl font-bold mb-3'>blog : {blog.length}</h2>
            {
                blog.map(blog=><Blog 
                blog={blog}
                key={blog.id}
                handleAddBookMark={handleAddBookMark}
                handleReadingTime={handleReadingTime}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;