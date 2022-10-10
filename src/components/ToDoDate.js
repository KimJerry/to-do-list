import React from 'react';

import Card from './UI/Card';
import './ToDoDate.css';

const ToDoDate = (props) => {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('ko-KR', { month: 'long' });
    const day = props.date.toLocaleString('ko-KR', { day: '2-digit' });

    return (
        <div className='to-do-date'>
            <div>{`🗓 ${year} ${month} ${day}까지`}</div>
        </div>
    );
};

export default ToDoDate;
