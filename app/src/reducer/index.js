import { GET_DATA, FETCH_MORE } from '../actions/index'; 


const initialState = {
  listings: 25,
  coins: [],
  isFetchingData: false,
}

export const coinReducer = (state = initialState, action) => {
  console.log(state)
  switch(action.type){
    case GET_DATA:
      return {
        ...state,
        coins: action.payload,
        isFetchingData: false
      }
    case FETCH_MORE:
      return {
        ...state,
        listings: state.listings + 25,
        isFetchingData: true
      }
    default: 
      return state
  }
}