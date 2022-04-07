const initialState = {
  playerRoles: [],
};
const showCharReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW":
      for (let i = 0; i <= action.name.length - 1; i++) {
        const number = Math.round(
          Math.random() * (action.chracters.length - 1)
        );
        state.playerRoles.push({
          name: action.name[i].name,
          role: action.chracters[number],
          quantity:1
        });
        action.chracters.splice(number, 1);
      }

      return {
        ...state,
        playerRoles: [...state.playerRoles],
      };

      case "SHOW_ROLE":
        window.alert(`${action.name} : ${action.chracters}`)
      state.playerRoles.find(item =>{if(item.name === action.name){
          
      
      } })

    default:
      return state;
  }
};

export default showCharReducer;
