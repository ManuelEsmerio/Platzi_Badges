import React, { Component } from 'react'
import md5 from 'md5';

import api from '../api';
import PageError from '../components/PageError';
import PageLoading from '../components/PageLoading';

import BadgeDetails from './BadgeDetails';

class BadgeDetailsContainer extends Component{

    state = {
        loading:true,
        error:null,
        data:undefined
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async e =>{
        this.setState({loading:true, error:null, data:undefined});

        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
            console.log(data);
            this.setState({loading:false, data:data});
        } catch (error) {
            this.setState({loading:true, error:error});
        }
    }

    render(){

        if(this.state.loading){
            return <PageLoading />
        } 

        if (this.state.error) {
            return <PageError error={ this.state.error } />
        }

        return (
            <BadgeDetails badge={ this.state.data } hash={ md5(this.state.data.email) }/>
        )
    }
}

export default BadgeDetailsContainer
