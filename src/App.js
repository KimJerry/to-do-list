import React, { useState } from 'react';

import Lists from './components/Lists/Lists';
import NewToDo from './components/NewToDo/NewToDo';

const DUMMY_DATA = [
    {
        id: 'todo1',
        content: '스터디 진행하기',
        date: new Date(2022, 7, 23),
    },
    {
        id: 'todo2',
        content: '게임하기',
        date: new Date(2022, 2, 11),
    },
    {
        id: 'todo3',
        content: '운동하기',
        date: new Date(2022, 9, 5),
    },
    {
        id: 'todo4',
        content: '공부하기',
        date: new Date(2022, 9, 10),
    },
];

function App() {
    const [toDoList, setToDoList] = useState(DUMMY_DATA);

    function addToDoHandler(enteredToDoData) {
        const todoData = {
            ...enteredToDoData,
            id: Math.random().toString(),
        };

        setToDoList((prevState) => {
            return [...prevState, todoData];
        });
    }

    function deleteToDoHandler(idToDelete) {
        setToDoList((prevState) => {
            const newToDoList = prevState.filter(
                (curObj) => curObj.id !== idToDelete
            );
            return newToDoList;
        });
    }

    return (
        <div>
            <h2>To Do List</h2>
            <NewToDo onAddList={addToDoHandler} />
            <Lists listItems={toDoList} onDeleteToDo={deleteToDoHandler} />
        </div>
    );
}

export default App;
