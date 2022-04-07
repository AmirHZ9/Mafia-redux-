import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import { selectCharacter } from "../Redux/chracter/chracterAction";
import { showChracter } from "../Redux/showChracter/showChracterAction";
import { shahrvanRoles, mafiaRoles } from "../Roles/Roles";
import styles from "../Style/ChracterSelect.module.css";
import doctor from "../assets/pic/doctor.jpg";
import godfather from "../assets/pic/godFather.jpg";

export default function SelectCharacter() {
  const name = useSelector((state) => state.playerState.player);
  const chracter = useSelector((state) => state.chracterState.chracters);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.shahrvand}>
        <div className={styles.chracters}>
          <h2>نقش های شهروند</h2>
          <div>
            {shahrvanRoles.map((item) => (
              <button
                key={v4()}
                onClick={() => dispatch(selectCharacter(item))}
                className={
                  chracter.includes(item) ? styles.selectedShahrvand : ""
                }
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div>
          <img src={doctor} alt="doctor" />
        </div>
      </div>

      <div className={styles.mafia}>
        <div>
          <img src={godfather} alt="godfather" />
        </div>
          <div className={styles.chracters}>
          <h2>نقش های مافیا</h2>
            <div>
            {mafiaRoles.map((item) => (
                <button
                key={v4()}
                onClick={() => dispatch(selectCharacter(item))}
                className={chracter.includes(item) ? styles.selectedMafia : ""}
                >
                {item}
                </button>
            ))}
            </div>
        </div>
      </div>

      <div>
        {chracter.length == name.length ? (
          <button onClick={() => dispatch(showChracter(chracter, name))}>
            <Link to="/ShowChracter">شروع</Link>
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
