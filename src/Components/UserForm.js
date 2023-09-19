import React, { Component, createRef } from 'react'

export default class UserForm extends Component {
    constructor(props) {
        super(props)
        this.userNameRef = createRef()
        this.state = {}
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.userNameRef.current.value)
        this.userNameRef.current.style.backgroundColor='aqua'
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='UserName'>UserName:</label>
                    <input
                        type='text'
                        id='UserName'
                        ref={this.userNameRef}
                    />
                </div>
                <button>Save</button>
            </form>
        )
    }
}
