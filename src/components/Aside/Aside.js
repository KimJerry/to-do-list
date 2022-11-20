import React from 'react';

import './Aside.css';

const Aside = (props) => {
    const clickHandler = (event) => {
        props.onSelectOption(event.target.id);
    };

    return (
        <div className='aside-wrapping'>
            <div className='aside__icon'>□</div>
            <div
                className='aside__today-todo'
                id='today-todo'
                onClick={clickHandler}
            >
                <div>
                    <span>☼</span>
                    <span>오늘 할 일</span>
                </div>
                <div className='aside__today-todo-count'>1</div>
            </div>
            <div
                className='aside__important'
                id='important'
                onClick={clickHandler}
            >
                <div>
                    <span>☆</span>
                    <span>중요</span>
                </div>
                <div className='aside__important-count'>1</div>
            </div>
            <div className='aside__planned' id='planned' onClick={clickHandler}>
                <div>
                    <span>🗓</span>
                    <span>계획된 일정</span>
                </div>
                <div className='aside__planned-count'>1</div>
            </div>
            <div className='aside__all' id='aside-all' onClick={clickHandler}>
                <div>
                    <span>🏚</span>
                    <span>모든 작업</span>
                </div>
                <div className='aside__all-count'>1</div>
            </div>
        </div>
    );
};

export default Aside;
