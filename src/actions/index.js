import axios from 'axios'

export const TOGGLE_MODAL = 'TOGGLE_MODAL'
export const REQUEST_GIFS = 'REQUEST_GIFS'

export function toggleModal( gif = { selectedGif: null } ) {
  return {
    type: TOGGLE_MODAL,
    gif
  }
}

const API_URL = 'http://api.giphy.com/v1/gifs/search?q='
const API_KEY = '&api_key=d73a858d4880465c9dcef78ebf1479eb'

export function requestGifs( term = null ) {

  const data = axios.get( `${API_URL}${term}${API_KEY}` )

  console.log( term )
  return {
    type: REQUEST_GIFS,
    payload: data
  }
}