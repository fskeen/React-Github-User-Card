import React from 'react';

import Card from './Card'

function CardContainer ({users, followers, following}) {

    return (
        <ul>
            {users.map(user => {
                return <Card key={Date.now} user={user} followers={followers} following={following}/>
            })}
        </ul>
        
    )
}

export default CardContainer;