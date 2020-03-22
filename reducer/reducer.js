const initialState = {
  data : []
}

const reducer = (state=initialState,action) => {
  return state;
  if(action.type == "ADD_DATA"){
    return {
      ...state,
      data:action.payload
    }
  }
}

export default reducer;