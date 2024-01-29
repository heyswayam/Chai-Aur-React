// import React from 'react'

function Button(props) {
    console.log(props);   
    return (
        <>
            <button>{props.btnText}</button>
        </>
    )
}

export default Button
