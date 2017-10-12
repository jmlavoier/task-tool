import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ description }) => <li>{description}</li>;

Todo.propTypes = {
    description: PropTypes.string.isRequired,
};

export default Todo;