import React from 'react';

function Card ({user, followers, following, clickOnFollows}) {
    return (
        <>
        <li className="user-card">
            <div className="avatar">
                <img src={user.avatar_url} alt="user avatar" />
            </div>
            <div>
                <a href={user.html_url} className="name">
                    <h3 className="name">{user.name}</h3>
                </a>
                <p>{user.bio}</p>
                <div className="repos">
                    <img src={`https://ghchart.rshah.org/${user.login}`} alt="github contributions graph"/>
                </div>
            </div>
            <div className="side-info">
                <p>Account created: {user.created_at}</p>
                <p>Last updated: {user.updated_at}</p>
                <p>Public repos: {user.public_repos}</p>
                <p>Public gists: {user.public_gists}</p>
            </div>
            
        </li>
        <div className="follows">
            <div className="divider">
                <h4>Some of {user.name}'s {user.followers} followers</h4>
                <div className="follow-column">
                    
                    {followers.map( a => {
                            return (
                                <p
                                className="follower"
                                key={a.login}
                                onClick={()=> clickOnFollows(a.login)}>{a.login}</p>
                            )
                        })}
                </div>
            </div>
            <div className="divider reverse">
                <h4>Some of the {user.following} people {user.name} follows</h4>
                <div className="follow-column reverse">
                        
                        {following.map( a => {
                            return (
                                <p
                                className="following"
                                key={a.login}
                                onClick={()=> clickOnFollows(a.login)}>{a.login}</p>
                            )
                        })}
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Card;