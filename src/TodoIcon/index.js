import React from "react";
import './TodoIcon.css'
import { BiCheckCircle, BiTrash } from "react-icons/bi";
import { TodoIconContext } from './TodoIconContext'


function TodoIcon(props) {
    const { TYPEICONCHECK, TYPEICONDELETE } = React.useContext(TodoIconContext);

    const typeIcon={
        "CHECK":(<BiCheckCircle/>),
        "DELETE":(<BiTrash/>)

    }

    return (

        <React.Fragment>

            {typeIcon['CHECK']}
            {TYPEICONCHECK === props.typeButton &&
                <span  onClick={props.onClick} className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} >
                    <BiCheckCircle />
                </span>}
            {TYPEICONDELETE === props.typeButton &&
                <span  onClick={props.onClick}>
                    <BiTrash  className="Icon Icon-delete"/>
                </span>
            }

        </React.Fragment>

    );

}

export { TodoIcon }