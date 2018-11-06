import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import Todo from './Todo';
import TodoForm from './TodoForm';
import {getTodos, addTodo, removeTodo} from './actionCreators';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getTodos();
    }

    handleSubmit(val) {
        this.props.addTodo(val);
    }

    removeTodo(id) {
        this.props.removeTodo(id);
    }

    render() {
        let todos = this.props.todos.map(val => (
            <Todo removeTodo={this.removeTodo.bind(this, val._id)}
                task={val.task}
                key={val._id}
            />
        ));

        return (
            <div>
                <Route path="/todos/new" component={props => (
                    <TodoForm {...props} handleSubmit={this.handleSubmit} />
                )} />
                <Route exact path="/todos"
                    component={() => <div>{todos}</div>}
                />
            </div>
        );
    }
}

function mapStateToProps(reduxState) {
    return {
        todos: reduxState.todos
    }
}

export default connect(mapStateToProps, {getTodos, addTodo, removeTodo})(TodoList);
