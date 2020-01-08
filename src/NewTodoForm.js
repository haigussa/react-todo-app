import React, { Component } from 'react'
import uuid from 'uuid/v4'

class NewTodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.addTodo({ ...this.state, id: uuid() })
        this.setState({
            task: ""
        })
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form className="Form-input" onSubmit={this.handleSubmit}>
                <label htmlFor="task"></label>
                <input className="Todo-input" name="task" type="text" value={this.state.task} onChange={this.handleChange} />
                <i className="fa fa-plus edit-add-btn"></i>
            </form>
        )
    }
}

export default NewTodoForm
