import React from 'react'

import './style/PageError.css'

const PageError = (props) => {
    return (
        <div className="PageError"><span role="img">❌</span> { props.error.message } <span role="img">😱</span></div>
    )
}

export default PageError
