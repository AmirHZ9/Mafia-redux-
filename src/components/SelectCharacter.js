import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import { isInCart, quantityCount } from "../functions/function";
import {
  selectCharacter,
  increaseCharacter,
  decreaseCharacter,
} from "../Redux/chracter/chracterAction";
import { showChracter } from "../Redux/showChracter/showChracterAction";
import { shahrvanRoles, mafiaRoles } from "../Roles/Roles";
import styles from "../Style/ChracterSelect.module.css";
import doctor from "../assets/pic/doctor.jpg";
import godfather from "../assets/pic/godFather.jpg";
import { trashIcon } from "../assets/icon/icon";

export default function SelectCharacter() {
  const name = useSelector((state) => state.playerState.player);
  const chracter = useSelector((state) => state.chracterState.chracters);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.shahrvand}>
        <div >
          <h2>نقش های شهروند</h2>
          <div className={styles.chracters}>
            {shahrvanRoles.map((item) => (
              <div class={styles.AddChracterButton}>
                <button
                  key={v4()}
                  onClick={() => dispatch(selectCharacter(item))}
                  className={
                    chracter.includes(item)
                      ? styles.selectedShahrvand
                      : styles.addChracter
                  }
                >
                  {item}
                  {quantityCount(chracter, item) > 0 && (
                    <span>({quantityCount(chracter, item)})</span>
                  )}
                </button>
                <div class={styles.IncreaseButton}>
                  {isInCart(chracter, item) && (
                    <button
                      onClick={() => dispatch(increaseCharacter(item))}
                      className={styles.increaseButton}
                    >
                      +
                    </button>
                  )}
                  {quantityCount(chracter, item) == 1 && (
                    <button onClick={() => dispatch(decreaseCharacter(item))}>
                      {trashIcon}
                    </button>
                  )}
                  {quantityCount(chracter, item) > 1 && (
                    <button onClick={() => dispatch(decreaseCharacter(item))}>
                      -
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.image}>
          <img src={doctor} alt="doctor" />
        </div>
      </div>

      <div className={styles.mafia}>
        <div>
          <img src={godfather} alt="godfather" />
        </div>
        <div >
          <div >
            <h2>نقش های مافیا</h2>

            <div className={styles.chracters}>
              {mafiaRoles.map((item) => (
                <div class={styles.AddChracterButton}>
                  <button
                    key={v4()}
                    onClick={() => dispatch(selectCharacter(item))}
                    className={
                      chracter.includes(item)
                        ? styles.selectedMafia
                        : styles.addChracter
                    }
                  >
                    {item}
                    {quantityCount(chracter, item) > 0 && (
                      <span>({quantityCount(chracter, item)})</span>
                    )}
                  </button>
                  <div className={styles.IncreaseButton}>
                    {isInCart(chracter, item) && (
                      <button onClick={() => dispatch(increaseCharacter(item))}>
                        +
                      </button>
                    )}
                    {quantityCount(chracter, item) == 1 && (
                      <button onClick={() => dispatch(decreaseCharacter(item))}>
                        {" "}
                        {trashIcon}
                      </button>
                    )}
                    {quantityCount(chracter, item) > 1 && (
                      <button onClick={() => dispatch(decreaseCharacter(item))}>
                        -
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.selectCharButton}>
        {chracter.length == name.length ? (
          <button className={styles.startButton} onClick={() => dispatch(showChracter(chracter, name))}>
            <Link to="/ShowChracter">تقسیم نقش</Link>
          </button>
        ) : (
          <div>
            <p>تعداد بازیکنان:{name.length}</p>
            <p>تعداد بازیکنان باید با تعداد نقش ها برابر باشد.</p>
          </div>
        )}
      </div>
    </div>
  );
}
