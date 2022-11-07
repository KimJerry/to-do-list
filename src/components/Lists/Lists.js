import React from 'react';

import ToDoListItem from './ToDoListItem';
import './Lists.css';

const Lists = (props) => {
    return (
        <div className='lists'>
            {props.listItems.map((element) => (
                <ToDoListItem
                    key={element.id}
                    content={element.content}
                    date={element.date}
                />
            ))}
        </div>
    );
};

export default Lists;
