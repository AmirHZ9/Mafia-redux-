import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addPlayer, removePlayer } from "../Redux/player/playerAction";
import styles from "../Style/playerName.module.css";

export default function AddPlayer() {

  const [name, setName] = useState("");
  const nameState = useSelector((state) => state.playerState);
  const dispatch = useDispatch();
   

  const playerHandler = (event) => {
    if (event.keyCode === 13) {
      if (name.length == 0) {
      } else {
        dispatch(addPlayer(name));
        setName("");
      }
    }
  };
  const playerHandlerOnClick = () => {
    if (name.length == 0) {
    } else {
      dispatch(addPlayer(name));
      setName("");
    }
  };

  return (
    <div className={styles.container}>
      <h2> لیست بازیکنان({nameState.player.length})</h2>

      <input
        type="text"
        value={name}
        placeholder="نام بازیکن را وارد کنید"
        onChange={(event) => setName([event.target.value])}
        onKeyDown={playerHandler}
      />
      <button onClick={playerHandlerOnClick} className={styles.addPlayerButton}>
        +
      </button>

      {nameState.player.map((item) => (
        <div key={item.id} className={styles.playerName}>
          <p>{item.name}</p>
          <button
            className={styles.removePlayerButton}
            onClick={() => dispatch(removePlayer(item))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
      ))}

      <div className={styles.selectCharButton}>
        {nameState.player.length < 5 ? (
          "تعداد بازیکنان باید بیشتر از 5 باشد."
        ) : (
          <Link to="/Chracter">انتخاب نقش ها</Link>
        )}
      </div>
    </div>
  );
}
