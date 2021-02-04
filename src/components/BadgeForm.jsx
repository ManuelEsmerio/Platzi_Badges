import React, { Component } from 'react'

class BadgeForm extends Component{

    handleChange = (e) =>{
        console.log( { value : e.target.value, name: e.target.name } );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Algo sucedió");
    }

    render() {
        return (
            <div className="container">
                <h1>New Attendant</h1>
                <form onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input onChange={ this.handleChange } type="text" name="firstName" className="form-control"/>
                    </div>

                    <button className="btn btn-primary">save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;