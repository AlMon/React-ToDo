import React from 'react';

const ListItem = (props) => {
    return (
        <li className="list-group-item">
          <button
            className="btn-sm btn-info btn mr-4"
            onClick={props.editTodo}
          >
            Edit
          </button>
          {props.todo.name}
          <button
            className="btn-sm btn-danger btn ml-4"
            onClick={props.deleteTodo}
          >
            x
          </button>
        </li>
      );
}
 
export default ListItem;