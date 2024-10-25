import React from 'react';
import Bookmarks from '../Bookmarks/Bookmarks';

const Bookmark = ({bookmarks,readintTime}) => {
    console.log(bookmarks)
    return (
        <div className='w-1/3'>
            <div className='bg-slate-300 text-2xl mb-5 font-bold p-4 rounded-lg'>
                <h2>Reading time {readintTime}</h2>
            </div>

            <div className=' p-5 rounded-md  bg-gray-400'>
            <h1 className='text-center text-3xl font-bold'>Bookmarked Blog: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmarks)=><Bookmarks key={bookmarks.id} bookmarks={bookmarks}></Bookmarks>)
            }
            </div>

        </div>
        
    );
};

export default Bookmark;