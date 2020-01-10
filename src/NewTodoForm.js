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
        this.handleReset = this.handleReset.bind(this)

    }
    handleSubmit(e) {
        e.preventDefault()
        if(e.target.value>0){
            alert('Please provide a valid todo')
        } else{
        this.props.addTodo({ ...this.state, id: uuid() })
        this.setState({
            task: ""
        })
    }
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleReset() {
        this.props.resetAll()
    }
    render() {
        return (
            <div>
                <form className="Form-input" onSubmit={this.handleSubmit}>
                    <label htmlFor="task"></label>
                    <input className="Todo-input" name="task" type="text" value={this.state.task} onChange={this.handleChange} />
                    <i className="fa fa-plus" onClick={this.handleSubmit}></i>
                </form>
                <button className="reset-btn" onClick={this.handleReset}>Clear All</button>
            </div>
        )
    }
}

export default NewTodoForm
