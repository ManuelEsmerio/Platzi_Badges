import React, { Component } from 'react'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import Navbar from '../components/Navbar'
import header from '../images/badge-header.svg'

import './style/BadgeNew.css'

class BadgeNew extends Component{
    render(){
        return (
            <div>
                <Navbar />

                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={ header } alt="logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName="Manuel" lastName="Esmerio Garcia" avatar="https://en.gravatar.com/avatar/identicon" jobTitle="FullStack" twitter="@Esmerio55" />
                        </div>

                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew
