import React from "react";
import './TodoIcon.css'
import { BiCheckCircle, BiTrash } from "react-icons/bi";



function TodoIcon(props) {
    return (

        <React.Fragment>
            {props.iconType==="CHECK" &&   <BiCheckCircle />}
            {props.iconType==="DELETE" && <BiTrash />}
            
        </React.Fragment>

    );

}

export { TodoIcon }