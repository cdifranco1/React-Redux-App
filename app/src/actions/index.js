import axios from 'axios';

export const GET_DATA = 'GET_DATA'
export const FETCH_MORE = 'FETCH_MORE'

export const getData = (listings) =>  dispatch => {
  axios
    .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${listings}&page=1&sparkline=false`)
    .then(res => {
      dispatch({ type: GET_DATA, payload: res.data })
    })
}

export const fetchMore = () => dispatch => {
  dispatch({ type: FETCH_MORE })
}