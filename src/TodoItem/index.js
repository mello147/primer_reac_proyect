import React from 'react';
import './TodoItem.css';
import { TodoIcon } from '../TodoIcon';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.toggleCompleteTodo}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        X
      </span>
      <TodoIcon texto="Jairo"></TodoIcon>
    </li>
  );
}

export { TodoItem };
