import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addPlayer, removePlayer } from "../Redux/player/playerAction";
export default function AddPlayer() {
  const [name, setName] = useState("");
  const nameState = useSelector((state) => state.playerState);
  const dispatch = useDispatch();

  const playerHandler = () => {
    if (name.length == 0) {
    } else {
      dispatch(addPlayer(name));
      setName("");
    }
  };

  return (
    <div>
      <h2> تعداد بازیکنان({nameState.player.length})</h2>
      <label>نام بازیکن</label>
      <input
        type="text"
        value={name}
        onChange={(event) => setName([event.target.value])}
      />
      <button onClick={playerHandler}>اضافه کن</button>

      {nameState.player.map((item) => (
        <div
          key={item.id}
          className="d-flex justify-content-center m-3 align-items-baseline"
        >
          <p>{item.name}</p>
          <button onClick={() => dispatch(removePlayer(item))}>*</button>
        </div>
      ))}

      <div>
        <Link to="/Chracter">انتخاب نقش ها</Link>
      </div>
    </div>
  );
}
