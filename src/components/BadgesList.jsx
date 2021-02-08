import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './style/BadgesList.css'

class BadgesList extends Component{
    render(){
        return (
            <ul className="list-unstyled friend-list">
                {
                    this.props.badges.map((badge)=>{
                        return(
                            <li className="shadow p-3 mb-2 bg-white rounded" key={ badge.id }>
                                <Link to="/" >
                                    <img src={ badge.avatarUrl } alt={ badge.firstName } 
                                    className="rounded-circle" />
                                    <div className="friend-name">	
                                        <strong>{ badge.firstName } { badge.lastName }</strong>
                                    </div>
                                    <div className="last-message text-muted">{ badge.email }
                                    </div>
                                    <small className="time text-muted">@{ badge.twitter }</small>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default BadgesList;