import axios from 'axios';

export const GET_DATA = 'GET_DATA'

export const getData = () =>  dispatch => {
  axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false')
    .then(res => {
      dispatch({ type: GET_DATA, payload: res.data })
    })
}