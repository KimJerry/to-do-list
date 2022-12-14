import React from 'react';

import ToDoDate from './ToDoDate';
import Card from '../UI/Card';
import './ToDoListItem.css';

const ToDoListItem = (props) => {
    function clickHandler(event) {
        props.onDeleteToDo(props.id);
    }
    return (
        <Card className='to-do-list-item' onClick={clickHandler}>
            <div className='task-item-wrapper'>
                <div className='to-do-list-item__check-circle'></div>
                <div className='to-do-description'>
                    <div>{props.content}</div>
                    <ToDoDate date={props.date} />
                </div>
            </div>
            <div className='to-do-list__star'>☆</div>
        </Card>
    );
};

export default ToDoListItem;
