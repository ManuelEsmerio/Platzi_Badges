import React from 'react'
import { Link } from 'react-router-dom';

import DeleteBadgeModal from '../components/DeleteBadgeModal';
import Badge from '../components/Badge';

import confLogo from '../images/platziconf-logo.svg';
import './style/BadgeDetails.css';

const BadgeDetails = ({ badge, hash, modalIsOpen, onCloseModal, onOpenModal, onDeleteBadge }) => {
    return (
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo de la conferencia" />
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1> {badge.firstName} {badge.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge firstName={badge.firstName}
                            lastName={badge.lastName}
                            avatar={`https://en.gravatar.com/avatar/${hash}?d=identicon`}
                            jobTitle={badge.jobTitle}
                            email={badge.email}
                            twitter={badge.twitter} />
                    </div>

                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <div className="form-group">
                                <Link className="btn btn-warning" to={`/badges/${badge.id}/update`}>
                                    Update
                                </Link>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-danger" onClick={ onOpenModal }>
                                    Delete
                                </button>
                                <DeleteBadgeModal 
                                isOpen={ modalIsOpen } 
                                onCloseModal={ onCloseModal }
                                onDeleteBadge= { onDeleteBadge }
                                 />
                                {/* createPortal te permite hacer render un componente donde tu se lo indiques  createPortal(Que, Donde)*/}
                                {/* { ReactDOM.createPortal(<h1>Realmente no estoy dentro de App</h1>, document.getElementById('modal'))} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BadgeDetails
