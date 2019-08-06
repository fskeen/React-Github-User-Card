import React from 'react';

import Card from './Card'

function CardContainer ({users}) {

    return (
        <ul>
            <p>Time to render some cards</p>
            {users.map(user => {
                return <Card users={users}/>
            })}
        </ul>
        
    )
}

export default CardContainer;