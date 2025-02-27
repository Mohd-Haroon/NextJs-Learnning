import React from 'react'

const UserPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return (
        <div>UserPage</div>
    )
}

export default UserPage