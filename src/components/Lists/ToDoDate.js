import React from 'react';

import './ToDoDate.css';

const ToDoDate = (props) => {
    let year = '';
    let month = '';
    let day = '';
    let validDate = '';

    if (props.date !== '') {
        year = props.date.getFullYear();
        month = props.date.toLocaleString('ko-KR', { month: 'long' });
        day = props.date.toLocaleString('ko-KR', { day: '2-digit' });
        validDate = `π ${year} ${month} ${day}κΉμ§`;
    }

    return (
        <div className='to-do-date'>
            <div>{validDate}</div>
        </div>
    );
};

export default ToDoDate;
