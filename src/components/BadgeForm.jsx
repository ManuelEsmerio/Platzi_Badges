import React, { Component } from 'react'

class BadgeForm extends Component{

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props.formValue);
    }

    render() {
        return (
            <div className="container">
                <h1>New Attendant</h1>
                <form onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input onChange={ this.props.onChange } type="text" name="firstName" 
                        value={ this.props.formValue.firstName } className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input onChange={ this.props.onChange } type="text" name="lastName" 
                        value={ this.props.formValue.lastName }className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input onChange={ this.props.onChange } type="email" name="email" 
                        value={ this.props.formValue.email } className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Job Title:</label>
                        <input onChange={ this.props.onChange } type="text" name="jobTitle" 
                        value={ this.props.formValue.jobTitle } className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Twitter:</label>
                        <input onChange={ this.props.onChange } type="text" name="twitter" 
                        value={ this.props.formValue.twitter } className="form-control"/>
                    </div>

                    <button className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;