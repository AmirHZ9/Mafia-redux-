import {v4} from "uuid"

const initialState = {
    player:[
        
    ]
}

const playerReducer = (state=initialState,action) =>{
    switch(action.type){
        case "Add-player":
            const name = action.payload
            state.player.push({name:name,id:v4()})
            return{
                ...state,
                player:[...state.player]
            }
        case "Remove-Player":
            const newplayer = state.player.filter(item => item.id !== action.payload.id)
            return{
                ...state,
                player:[...newplayer]
            }
        default:
            return state
    }
}
export default playerReducer;