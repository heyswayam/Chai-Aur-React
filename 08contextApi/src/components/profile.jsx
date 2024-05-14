import React, { useContext } from 'react'
import UserContext from '../context/userContext'

function Profile() {
    const {user} = useContext(UserContext);

    if(!user) return <div>Enter your username</div>
    return (
        <div>
            Welcome {user}
        </div>
    )

}

export default Profile