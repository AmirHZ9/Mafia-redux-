import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { v4 } from 'uuid'
import { showRole } from '../Redux/showChracter/showChracterAction'
import styles from "../Style/showChracter.module.css"
import herfei from '../assets/pic/herfei.jpg'
import mashughe from '../assets/pic/mashuqe.jpg'
export default function ShowChracter() {
    const playerRoles = useSelector(state => state.showChracterState.playerRoles)    
    const dispatch = useDispatch()
 


    
    return (
    <div >
        <div className={styles.container}>
            
        <div>
            <img src={herfei} alt="herfei" />
        </div>
        <div className={styles.showChracter}>

        {
           playerRoles.map(item =>
            <div key={v4()}> 
                <button  onClick={() => dispatch(showRole(item.role,item.name))} >{item.name}</button>
                
            
            </div>

           )
       }
        </div>
       <div>
           <img src={mashughe} alt="" />
       </div>
        </div>
       <div className={styles.startButton}>
            <Link to="/GOD">شروع بازی</Link>
       </div>
    </div>
  )
}
