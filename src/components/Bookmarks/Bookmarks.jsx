import React from 'react';

const Bookmarks = ({bookmarks}) => {
    const {title}=bookmarks;
    console.log(title)
    return (
        <div className='bg-slate-300 m-4 rounded-lg p-4'>
            <h3 className='text-3xl fond-bold'>{title}</h3>
        </div>
    );
};

export default Bookmarks;

