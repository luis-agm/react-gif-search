import React from 'react'
import debounce from 'lodash/debounce'

class SearchBar extends React.Component {
  onInputChange = debounce( ( term ) => {
    this.props.onTermChange( term )
  }, 200 )

  render() {
    return (
      <div className="search">
        <input placeholder="Enter text to search for gifs!" onChange={event => this.onInputChange( event.target.value )} />
      </div>
    )
  }
}

export default SearchBar