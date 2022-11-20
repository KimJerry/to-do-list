import React from 'react';

import './Header.css';

const Header = () => {
    return (
        <div className='header-wrapping'>
            <div className='header-left'>
                <span>❖</span>
                <span>To Do</span>
            </div>
            <div className='header-center'>
                <input type='text' placeholder=' 검색' />
            </div>
            <div className='header-right'>
                <span>⚙︎</span>
                <span>﹖</span>
                <span>☏</span>
                <span>☃</span>
            </div>
        </div>
    );
};

export default Header;
