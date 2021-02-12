import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';

import './style/BadgesList.css'

const BadgesList = ({ badges }) => {

    const useSearchBadges = ( badges ) =>{
        const [value, setValue] = useState('');
        const [filterResult, setFilterResult] = useState( badges );

        useMemo(() => {
            const result = badges.filter(item => `${item.firstName} ${item.lastName}`.toLowerCase().includes(value.toLowerCase()))
    
            setFilterResult(result);
        }, [value, badges])

        return { value, setValue, filterResult }
    }

    const { value, setValue , filterResult } = useSearchBadges(badges);

    

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    if (filterResult.length === 0) {
        return (
            <div>
                <div className="form-group">
                    <label>Filter Badges:</label>
                    <input type="text" onChange={handleChange} value={value} className="form-control" placeholder="Search..." />
                </div>

                <h3>No badges were found</h3>
                <Link className="btn btn-primary" to="/badges/new">
                    Create new badge
                    </Link>
            </div>
        )
    }
    return (
        <>
            <div className="form-group">
                <label>Filter Badges:</label>
                <input type="text" onChange={handleChange} value={value} className="form-control" placeholder="Search..." />
            </div>
            <ul className="list-unstyled friend-list">
                {
                    filterResult.map((badge) => {
                        return (
                            <li className="shadow p-3 mb-2 bg-white rounded" key={badge.id}>
                                <Link to={`/badges/${badge.id}`} className="text-reset text-decoration-none" >
                                    <Gravatar className='rounded-circle' email={badge.email} />
                                    <div className="friend-name">
                                        <strong>{badge.firstName} {badge.lastName}</strong>
                                    </div>
                                    <div className="last-message text-muted">{badge.email}
                                    </div>
                                    <small className="time text-muted">@{badge.twitter}</small>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )

}

export default BadgesList;