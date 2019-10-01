import React from 'react';

import Card from './Card'

function CardContainer ({users, followers, following, clickOnFollows}) {

    return (
        <ul>
            {users.map(user => {
                return <Card key={Date.now} user={user} followers={followers} following={following} clickOnFollows={clickOnFollows}/>
            })}
        </ul>
        
    )
}

export default CardContainer;