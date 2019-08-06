import React from 'react';

function Card ({user, followers, following}) {
    return (
        <>
        <li className="user-card">
            <div className="avatar">
                <img src={user.avatar_url} />
            </div>
            <div>
                <a href={user.html_url}>
                    <h3>{user.name}</h3>
                </a>
                <p>{user.bio}</p>
                <div className="repos">
                    <img src={`https://ghchart.rshah.org/fskeen`}/>
                </div>
            </div>
            <div>
                <p>Account created: {user.created_at}</p>
                <p>Last updated: {user.updated_at}</p>
                <p>Public repos: {user.public_repos}</p>
                <p>Public gists: {user.public_gists}</p>
            </div>
            
        </li>
        <div className="follows">
            <div className="follow-column">
                <h4>Followers</h4>
                {followers.map( a => {
                        return (
                            <p className="follower">{a.login}</p>
                        )
                    })}
            </div>
            <div className="follow-column">
            <h4>Following</h4>        
                    {following.map( a => {
                        return (
                            <p className="following">{a.login}</p>
                        )
                    })}
            </div>
        </div>
        </>
    )
}

export default Card;