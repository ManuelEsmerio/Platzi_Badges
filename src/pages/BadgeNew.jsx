import React, { Component } from 'react'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import header from '../images/badge-header.svg'

import './style/BadgeNew.css'

class BadgeNew extends Component{
    state = {
        form:{
            firstName:'',
            lastName:'',
            email:'',
            jobTitle:'Designer',
            twitter:''
        }
    }

    handleChange = e =>{
        this.setState({
            form:{
               ...this.state.form, [e.target.name] : e.target.value,
            }
        })
    }
    render(){
        return (
            <>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={ header } alt="logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName={ this.state.form.firstName } 
                            lastName={ this.state.form.lastName } 
                            avatar="https://en.gravatar.com/avatar/identicon" 
                            jobTitle={ this.state.form.jobTitle } 
                            email={ this.state.form.email}
                            twitter={ this.state.form.twitter } />
                        </div>

                        <div className="col-6">
                            <BadgeForm onChange={ this.handleChange } formValue={ this.state.form } />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default BadgeNew
