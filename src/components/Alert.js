import React from 'react'

function Alert(props) {
    return (
        <div style={{height: "40px"}}>
            {props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.msg}</strong>
                {/* <button type="button" class="btn-close" aria-label="Close"></button> */}
            </div>}
        </div>

    )
}

export default Alert
