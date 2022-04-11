const initialState = {
  playerRoles: [],
};
const showCharReducer = (state = initialState, action) => {
  const Swal= require('sweetalert2')
  
  switch (action.type) {
    case "SHOW":
      state.playerRoles=[]
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
        Swal.fire({
          title: "",
          text: `${action.name} : ${action.chracters}`,
          type: "success",
          confirmButtonColor: '#00092c',
          confirmButtonText: 'تایید',
          closeOnConfirm: false,
          closeOnCancel: false
      })

      state.playerRoles.find(item =>{if(item.name === action.name){
          
      
      } })

    default:
      return state;
  }
};

export default showCharReducer;
