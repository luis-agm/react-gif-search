import React, { Component } from 'react'
import debounce from 'lodash/debounce'

class SearchBar extends Component {
    constructor() {
        super()
        this.state = { term: '' }
    }

    onInputChange = debounce((term) => {
        this.setState({term})
        this.props.onTermChange(term)
    }, 200)

    render() {
        return (
            <div className="search">
                <input placeholder="Enter text to search for gifs!" onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

export default SearchBar;