const initialState = {
  chracters: [],
};

const chractersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_CHRACTER":
      if (!state.chracters.find((item) => item === action.payload)) {
        state.chracters.push(action.payload);
      } 
      return {
        ...state,
        chracters: [...state.chracters],
      };
    case "INCREASE" :
        state.chracters.push(action.payload)

        return{
          ...state,
          chracters:[...state.chracters]
        }
    case "DECREASE" :
        const indexD = state.chracters.findIndex(item => item == action.payload)
        state.chracters.splice(indexD,1)
        return{
          ...state,
          chracters:[...state.chracters]
        }
      

    default:
      return state;
  }
};
export default chractersReducer;
