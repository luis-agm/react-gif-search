import { TOGGLE_MODAL } from '../actions'

const initialState =  {
  selectedGif: null,
  modalIsOpen: false
}

export default function modal( state = initialState, action ) {
  switch( action.type ) {
    case TOGGLE_MODAL:
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen,
        selectedGif: action.gif.selectedGif
      }
    default:
      return state
  }
}