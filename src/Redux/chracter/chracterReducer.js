const initialState = {
  chracters: [],
};

const chractersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_CHRACTER":
      if (!state.chracters.find((item) => item === action.payload)) {
        state.chracters.push(action.payload);
        return {
          ...state,
          chracters: [...state.chracters],
        };
      } else {
        const newchracter = state.chracters.filter(
          (item) => item !== action.payload
        );
        return {
          ...state,
          chracters: [...newchracter],
        };
      }

    default:
      return state;
  }
};
export default chractersReducer;
