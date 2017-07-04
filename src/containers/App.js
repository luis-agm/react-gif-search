
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import GifList from 'components/GifList'
import SearchBar from 'components/SearchBar'
import GifModal from 'components/GifModal'
import 'styles/main.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar onTermChange={this.props.actions.requestGifs} />
        <GifList gifs={ this.props.gifs } onGifSelect={ selectedGif => this.props.actions.toggleModal( {selectedGif} ) } />
        <GifModal modalIsOpen={ this.props.modalIsOpen }
                  selectedGif={ this.props.selectedGif }
                  onRequestClose={ () => this.props.actions.toggleModal() } />
      </div>
    )
  }
}

function mapStateToProps( state ) {
  return {
    gifs: state.gifs.data,
    modalIsOpen: state.modal.modalIsOpen,
    selectedGif: state.modal.selectedGif
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    actions: bindActionCreators( Actions, dispatch )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( App )