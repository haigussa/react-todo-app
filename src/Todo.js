import React, { Component } from 'react'
import './Todo.css'

export class Todo extends Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleDelete(){
        this.props.deleteTodo(this.props.id)
    }
    render() {
        return (
            <div className="todo-app">
                <li>{this.props.task}</li>
                 {/* <i className="fa fa-pencil edit-add-btn"></i> */}
               <i className="fa fa-trash edit-add-btn" onClick={this.handleDelete}></i>
                
            </div>
        )
    }
}

export default Todo
