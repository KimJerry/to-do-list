import React from 'react';

import Lists from './components/Lists/Lists';
import NewToDo from './components/NewToDo/NewToDo';

function App() {
    const toDoList = [
        {
            id: 'todo1',
            content: '스터디 진행하기',
            date: new Date(2022, 7, 23),
        },
        {
            id: 'todo2',
            content: '스터디 진행하기',
            date: new Date(2022, 2, 11),
        },
        {
            id: 'todo3',
            content: '스터디 진행하기',
            date: new Date(2022, 9, 5),
        },
        {
            id: 'todo4',
            content: '스터디 진행하기',
            date: new Date(2022, 9, 10),
        },
    ];

    return (
        <div>
            <h2>To Do List</h2>
            <NewToDo />
            <Lists listItems={toDoList} />
        </div>
    );
}

export default App;
