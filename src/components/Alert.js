import React from 'react'

function Alert(props) {
    return (
        props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.msg}</strong>
            {/* <button type="button" class="btn-close" aria-label="Close"></button> */}
        </div>
    )
}

export default Alert
