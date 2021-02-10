import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';

import './style/BadgesList.css'

class BadgesList extends Component{
    render(){
        if (this.props.badges.length === 0) {
            return(
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create new badge
                    </Link>
                </div>
            )
        }
        return (
            <ul className="list-unstyled friend-list">
                {
                    this.props.badges.reverse().map((badge)=>{
                        return(
                            <li className="shadow p-3 mb-2 bg-white rounded" key={ badge.id }>
                                <Link to="/" >
                                    <Gravatar className='rounded-circle' email={ badge.email } />
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