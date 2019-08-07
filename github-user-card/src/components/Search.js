import React from 'react';

class Search extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            query: ""
        }
    }

    collectSearch = (e) => {
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state)
    }


    render() {
        return (
        <div className="search-container">
            <input
            type="text"
            placeholder="  Type in username to search"
            className="search-bar"
            name="query"
            value={this.state.query}
            onChange={this.collectSearch}></input>
            <button
                className="search-btn"
                onClick={() => (this.props.setSearch(this.state.query))}>Search</button>
        </div>
        )
    }
    
}

export default Search;