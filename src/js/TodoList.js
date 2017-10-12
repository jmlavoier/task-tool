import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

const TodoList = ({ todos }) => {
    return (
        <ul>
            { todos.map(({ description }, i) => <Todo key={i} description={description} /> ) }
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
}

export default TodoList;