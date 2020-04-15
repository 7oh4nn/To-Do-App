import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props => (
  <li className ={props.todo.complete ? "checkedItem" : ""} >
    <button onClick={props.onCheck} className="checkBtn"><FontAwesomeIcon icon="check" size="" /></button>
    <h3>{props.todo.text}</h3>
    <button onClick={props.onDelete} className="deleteBtn"><FontAwesomeIcon icon="times" size="" /></button>
  </li>
);
