import React, { Component } from 'react'
import api from '../api'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import PageLoading from '../components/PageLoading'
import header from '../images/platziconf-logo.svg'

import './style/BadgeNew.css'

class BadgeNew extends Component{
    state = {
        loading: false,
        error:null, 
        form:{
            firstName:'',
            lastName:'',
            email:'',
            jobTitle:'Developer',
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

    handleSubmit = async e =>{
        e.preventDefault();
        this.setState({loading: true, error: null});

        try {
            await api.badges.create( this.state.form );
            this.setState({loading: false});

            this.props.history.push('/badges');

        } catch (error) {
            this.setState({loading: false, error: error});
        }
    }

    render(){
        if (this.state.loading) {
            return <PageLoading />
        }

        return (
            <>
                <div className="BadgeNew__hero">
                    <img className="img-fluid BadgeNew_logo" src={ header } alt="logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName={ this.state.form.firstName || 'FirstName' } 
                            lastName={ this.state.form.lastName || 'LastName' } 
                            avatar="https://en.gravatar.com/avatar/identicon" 
                            jobTitle={ this.state.form.jobTitle || 'Job Title' } 
                            email={ this.state.form.email || 'Email' }
                            twitter={ this.state.form.twitter || 'Twitter' } />
                        </div>

                        <div className="col-6">
                            <BadgeForm 
                                type={ false }
                                onChange={ this.handleChange } 
                                formValue={ this.state.form }
                                onSubmit={ this.handleSubmit }
                                error={ this.state.error } />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default BadgeNew
