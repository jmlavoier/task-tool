const defaultStatus = [
    {
        description: 'Study',
        completed: false,
    },
    {
        description: 'Study 2',
        completed: false,
    }
];

const todos = (todos = defaultStatus, action) => {
    switch(action) {
        default: 
            return todos;
            break;
    }
}

export default todos;