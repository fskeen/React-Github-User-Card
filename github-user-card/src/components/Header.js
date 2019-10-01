import React from 'react';

import Search from './Search';

function Header ({setSearch}) {
    return (
        <header>
            <h1>Search for a GitHub user</h1>
            <Search setSearch={setSearch}/>
        </header>
        
    )
}

export default Header;