const initialState = {
  playerRoles: [],
};
const showCharReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW":
        for(let i=0;i<=action.name.length-1;i++){
         const number = Math.round(Math.random() * (action.chracters.length - 1));
         state.playerRoles.push({
             name:action.name[i].name,
             role:action.chracters[number],
            })
            action.chracters.splice(number, 1);
           
     }
       
     
      return {
        ...state,
        playerRoles: [...state.playerRoles],
      };
    
    default:
      return state;
  }
};

export default showCharReducer;
