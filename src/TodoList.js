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
        this.delete= this.delete.bind(this)
    }
    add(newTodo){
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }
    delete(id){
        this.setState({
            todos: this.state.todos.filter(todo => id !== todo.id)
        })
    }
 
    render() {
       const allTodos = this.state.todos.map(todo=>{
           return (<Todo key={todo.id} task={todo.task}  id={todo.id} deleteTodo={this.delete}/>)
       })
        return (
            <div>
                <h1 className="App-title">Todo App</h1>
                <ul className="Todo-container">
                    {allTodos}
                </ul>
                <NewTodoForm addTodo={this.add} />
            </div>
        )
    }
}

export default TodoList
