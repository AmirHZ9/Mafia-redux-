import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCharacter } from "../Redux/chracter/chracterAction";
import { showChracter } from "../Redux/showChracter/showChracterAction";
import { shahrvanRoles, mafiaRoles } from "../Roles/Roles";

export default function SelectCharacter() {
    const roles = useSelector(state => state.showChracterState)
    const name = useSelector(state => state.playerState.player)
    const chracter = useSelector(state => state.chracterState.chracters)
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h2>نقش های شهروند</h2>
        {shahrvanRoles.map((item) => (
          <button onClick={() => dispatch(selectCharacter(item))}>
            {item}
          </button>
        ))}
      </div>
      <div>
        <h2>نقش های مافیا</h2>
        {mafiaRoles.map((item) => (
          <button onClick={() => dispatch(selectCharacter(item))}>
            {item}
          </button>
        ))}
      </div>
      <div>
        <button onClick={() => dispatch(showChracter(chracter,name))}><Link to="/ShowChracter">شروع</Link></button>
      </div>
    </div>
  );
}
