import React, { Component } from 'react'

class BadgeForm extends Component {

    render() {
        return (
            <div className="container">

                {
                    !this.props.type ? (<h1>New Attendant</h1>) : (<h1>Update Attendant</h1>)
                }
                

                { this.props.error && (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>{ this.props.error.message }</strong>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )}

                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input onChange={this.props.onChange} type="text" name="firstName"
                            value={this.props.formValue.firstName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input onChange={this.props.onChange} type="text" name="lastName"
                            value={this.props.formValue.lastName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input onChange={this.props.onChange} type="email" name="email"
                            value={this.props.formValue.email} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Job Title:</label>
                        <input onChange={this.props.onChange} type="text" name="jobTitle"
                            value={this.props.formValue.jobTitle} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Twitter:</label>
                        <input onChange={this.props.onChange} type="text" name="twitter"
                            value={this.props.formValue.twitter} className="form-control" />
                    </div>

                    {
                        !this.props.type ? (<button className="btn btn-primary">Save</button>) : (<button className="btn btn-warning">Save changes</button>)
                    }

                </form>
            </div>
        )
    }
}

export default BadgeForm;