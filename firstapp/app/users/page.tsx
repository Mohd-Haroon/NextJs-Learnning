import React from 'react'

interface User {
    id : number;
    name : String;
}

const UserPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await res.json();
    return (
        <>
            <h1>Users</h1>
            <ul>
                {users.map(el => <li key={el.id}>{el.id}-{el.name}</li>)}
            </ul>
        </>
    )
}

export default UserPage