import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import MyLoader from "../Loader";

function AppUI() {
    const { error,
        loading,
        searchedTodos,
        toggleCompleteTodo,
        deleteTodo,
        openModal,
        setOpenModal } = React.useContext(TodoContext)

    return (<React.Fragment>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
            {error && <p>Es un error</p>}
            {loading && <p>Estamos Cargando...</p>}
            {(!loading && !searchedTodos.length) && <p>!Crea tu primer Todo!</p>}
            {searchedTodos.map(todo => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    toggleCompleteTodo={() => toggleCompleteTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
            ))}
        </TodoList>

        {loading &&
            new Array(4).fill().map((item, index) => (
                <MyLoader key={index}/>
            ))}



        <CreateTodoButton
            setOpenModal={setOpenModal}
        />
        {openModal && (
            <Modal>
                <TodoForm />
            </Modal>
        )}

    </React.Fragment>);

}

export { AppUI }