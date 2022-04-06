import { combineReducers } from "redux";
import playerReducer from "./player/playerReducer";
import chractersReducer from "./chracter/chracterReducer";
import showCharReducer from "./showChracter/showChracterReducer";
const rootReducer = combineReducers({
  playerState: playerReducer,
  chracterState: chractersReducer,
  showChracterState: showCharReducer,
});

export default rootReducer;
