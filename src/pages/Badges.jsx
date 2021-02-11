import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import api from '../api';
import BadgesList from '../components/BadgesList';
import MiniLoader from '../components/MiniLoader';
import PageError from '../components/PageError';
import PageLoading from '../components/PageLoading';

import logo from '../images/badge-header.svg'
import './style/Badges.css'

class Badges extends Component{

    state = {
        loading: true,
        error:null,
        data: undefined
    }

    componentDidMount(){
        this.fetchData();

        this.intervalId = setInterval(this.fetchData, 5000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    fetchData = async() =>{
        this.setState({loading:true, error:null});

        try {
            const data = await api.badges.list();
            this.setState({loading:false, data:data});
        } catch (error) {
            this.setState({loading:false, error:error});
        }
    }

    render(){

        if (this.state.loading === true && !this.state.data) {
            return <PageLoading />;
        }

        if (this.state.error) {
            return <PageError error={ this.state.error } /> 
        }

        return (
            <>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf_logo" src={ logo } alt="Conf Logo"/>
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgesList badges={ this.state.data } />
                    </div>
                </div>

                { this.state.loading && (<MiniLoader />)}
            </>
        )
    }
}

export default Badges;