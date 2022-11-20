import React, { useState } from 'react';

import './NewToDo.css';
import '../UI/Card';

function NewToDo(props) {
    const [enteredContent, setEnteredContent] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    function contentChangeHandler(event) {
        setEnteredContent(event.target.value);
    }

    function dateChangeHandler(event) {
        setEnteredDate(event.target.value);
    }

    function addToDoHandler(event) {
        event.preventDefault();

        const newToDo = {
            content: enteredContent,
            date: isNaN(Date.parse(enteredDate)) ? '' : new Date(enteredDate),
        };

        props.onAddList(newToDo);

        setEnteredContent('');
        setEnteredDate('');
    }

    return (
        <form className='new-to-do' onSubmit={addToDoHandler}>
            <div className='new-to-do__content'>
                <div className='new-to-do__check-circle'></div>
                <input
                    type='text'
                    placeholder='작업 추가'
                    value={enteredContent}
                    onChange={contentChangeHandler}
                />
            </div>

            <div className='new-to-do__footer'>
                <div className='new-to-do__deadline'>
                    <input
                        type='date'
                        min='2020-01-01'
                        max='2025-12-31'
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
                <div className='new-to-do__insert'>
                    <button type='submit'>추가</button>
                </div>
            </div>
        </form>
    );
}

export default NewToDo;
