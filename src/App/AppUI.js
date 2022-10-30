import React from 'react'
import { TodoContext } from "../TodoContex";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreatTodoButton } from "../CreatTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { TodoEmpty } from "../TodosEmpty";

export const AppUI = () => {
  
    const { error, 
            loading, 
            searchedTodos, 
            completeTodo, 
            deleteTodo,
            openModal,
            setOpenModal
        } = React.useContext( TodoContext );
  
    return (

    <React.Fragment>
        <TodoCounter />
                
        <TodoSearch />
                <TodoList>
                    { error && <TodosError error={error} />}
                    { loading && <TodosLoading /> }
                    { (!loading && !searchedTodos.length) && <TodoEmpty /> }
                    
                    { searchedTodos.map( todo => ( 
                    <TodoItem  
                    key={todo.text} 
                    text={ todo.text }
                    completed={todo.completed}
                    onComplete = { () => completeTodo(todo.text)}
                    onDelete = { () => deleteTodo(todo.text)}
                    />
                ) ) }
                </TodoList>


        <CreatTodoButton 
            setOpenModal={setOpenModal}
        />

        {!!openModal && (<Modal>
            
            <TodoForm/>

        </Modal>)}
    
    </React.Fragment>
   
  )
}
