import React from 'react';

import ToDoListItem from './ToDoListItem';
import './Lists.css';

const Lists = (props) => {
    function deleteListHandler(idToDelete) {
        props.onDeleteToDo(idToDelete);
    }

    return (
        <div className='lists'>
            {props.listItems.map((element) => (
                <ToDoListItem
                    key={element.id}
                    id={element.id}
                    content={element.content}
                    date={element.date}
                    onDeleteToDo={deleteListHandler}
                />
            ))}
        </div>
    );
};

export default Lists;
