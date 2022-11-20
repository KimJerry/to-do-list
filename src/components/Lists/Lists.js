import React from 'react';

import ToDoListItem from './ToDoListItem';
import './Lists.css';

const Lists = (props) => {
    function deleteListHandler(idToDelete) {
        props.onDeleteToDo(idToDelete);
    }
    let filteredList = props.listItems;
    if (props.filteringOption === 'planned') {
        filteredList = props.listItems.filter((curObj) => curObj.date !== '');
    } else if (props.filteringOption === 'aside-all') {
        filteredList = props.listItems;
    }

    return (
        <div className='lists'>
            {filteredList.map((element) => (
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
