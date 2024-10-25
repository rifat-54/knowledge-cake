import React from 'react';

import { IoBookmarksOutline } from "react-icons/io5";
import PropTypes from 'prop-types';
const Blog = ({blog,handleAddBookMark,handleReadingTime}) => {

    const{title,cover,author_name,author_img,posted_date,
    reading_time,hashtags}=blog;


    return (
        <div className='mb-20'>
            <img src={cover} alt="" />
            <div className='my-8 flex justify-between'>
                {/* 1stpart */}
                <div className='flex gap-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-xl font-bold'>{author_name}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                {/* second part */}
                <div>
                    <div className='flex gap-2 items-center'>
                        <p>{reading_time} min read</p>
                        <button onClick={()=>handleAddBookMark(blog)}><IoBookmarksOutline /></button>
                        
                    </div>
                </div>
                
            </div>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <div className='space-x-4 text-gray-500 my-4'>
                {
                    hashtags.map(has=><span key={has}><a href="#">{has}</a></span>)
                }
            </div>
            <button onClick={()=>handleReadingTime(reading_time)} className='underline text-purple-400'>Mark as read</button>
        </div>
    );
};

export default Blog;