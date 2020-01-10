import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import './Todo.css'

export class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: []
        }
        this.add = this.add.bind(this)
        this.delete = this.delete.bind(this)
        this.resetAll = this.resetAll.bind(this)
        this.edit = this.edit.bind(this)
    }
    add(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }
    delete(id) {
        this.setState({
            todos: this.state.todos.filter(todo => id !== todo.id)
        })
    }
    resetAll() {
        this.setState({
            todos: []
        })
    }
    edit(id, updatedTask) {
        const newEditedTask = this.state.todos.map(todo => {
            if (id === todo.id) {
                return {
                    ...todo, task: updatedTask
                }

            } else {
                return todo
            }
        })
        this.setState({
            todos: newEditedTask
        })
    }
    render() {
        const allTodos = this.state.todos.map(todo => {
            return (<Todo
                key={todo.id}
                task={todo.task}
                addTodo={this.add}
                id={todo.id}
                deleteTodo={this.delete}
                editTodo={this.edit} />)
        })
        return (
            <div>
                <h1 className="App-title">Todo App</h1>
                <ul className="Todo-container">
                    {allTodos}
                </ul>
                <NewTodoForm addTodo={this.add} resetAll={this.resetAll} />
            </div>
        )
    }
}

export default TodoList
