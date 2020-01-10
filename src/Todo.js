import React, { Component } from 'react'
import './Todo.css'

export class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            task: this.props.task
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.toggleForm = this.toggleForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }
    handleDelete() {
        this.props.deleteTodo(this.props.id)
    }
    toggleForm(e) {
        this.setState({
            editing: !this.state.editing
        })
    }
    handleChange(e) {
        this.setState({
            task: e.target.value
        })
    }
    handleEdit(e) {
        e.preventDefault();
        this.props.editTodo(this.props.id, this.state.task)
        this.setState({
            editing: false
        })
    }
    render() {
        return (
            <div >
                {!this.state.editing ? (<div className="todo-app">
                    <li>{this.props.task}</li>
                    <i className="fa fa-pencil edit-btn" onClick={this.toggleForm}></i>
                    <i className="fa fa-trash delete-btn" onClick={this.handleDelete}></i>
                </div>) : (<div>
                    <form action="submit" onSubmit={this.handleEdit}>

                        <input className="Todo-input edit-input" onChange={this.handleChange} value={this.state.task} />
                        <button className="edit-btn" >Save</button>
                    </form>
                </div>)}
            </div>
        )
    }
}

export default Todo
