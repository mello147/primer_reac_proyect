import React from 'react';
import './TodoItem.css';
import { TodoIcon } from '../TodoIcon';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <TodoIcon onClick={props.toggleCompleteTodo}  completed={props.completed} typeButton="CHECK"></TodoIcon>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <TodoIcon onClick={props.onDelete} typeButton="DELETE"></TodoIcon>

    </li>
  );
}

export { TodoItem };
