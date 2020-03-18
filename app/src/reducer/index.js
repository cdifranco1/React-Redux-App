import { GET_DATA } from '../actions/index'; 


const initialState = {
  coins: [],
  isFetchingData: false,
}

export const coinReducer = (state = initialState, action) => {
  console.log(state)
  switch(action.type){
    case GET_DATA:
      return {
        ...state,
        coins: action.payload
      }
    default: 
      return state
  }
}