import React from 'react'
import './CreateTodoButton.css';

export const CreatTodoButton = (props) => {

    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    }
    return (
        
        <button 
            className="CreateTodoButton"
            onClick={onClickButton }
        >
            +
        </button>
    )
}
