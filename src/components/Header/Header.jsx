import React from 'react';

import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='max-w-6xl mx-auto flex justify-between border-b-2 p-4'>
            <h1 className='text-4xl font-bold'>Knowkedge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;