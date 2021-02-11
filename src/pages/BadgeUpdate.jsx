import React, { Component } from 'react'
import api from '../api'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import PageLoading from '../components/PageLoading'
import header from '../images/platziconf-logo.svg'

import './style/BadgeUpdate.css'

class BadgeUpdate extends Component{
    state = {
        loading: true,
        error:null,
        form:{
            firstName:'',
            lastName:'',
            email:'',
            jobTitle:'Developer',
            twitter:''
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async e =>{
        this.setState({loading:true, error:null});

        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({loading:false, form:data});
        } catch (error) {
            this.setState({loading:true, error:error});    
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
            await api.badges.update( this.props.match.params.badgeId, this.state.form );
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
                <div className="BadgeUpdate__hero">
                    <img className="img-fluid BadgeUpdate_logo" src={ header } alt="logo" />
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
                                type={ true }
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

export default BadgeUpdate
