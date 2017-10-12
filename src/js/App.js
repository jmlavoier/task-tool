import { connect } from 'react-redux';
import TodoList from './TodoList';

const mapStateToProps = state => {
    return {
        todos: state,
    }
}

const mapDispatchToProps = dispatch => {
}

const App = connect(mapStateToProps)(TodoList);

export default App;
