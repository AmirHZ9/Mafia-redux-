import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { v4 } from 'uuid'
import { showRole } from '../Redux/showChracter/showChracterAction'
import styles from "../Style/showChracter.module.css"
export default function ShowChracter() {
    const playerRoles = useSelector(state => state.showChracterState.playerRoles)    
    const dispatch = useDispatch()
 


    
    return (
    <div>
        {
           playerRoles.map(item =>
            <div key={v4()}> 
                <button  onClick={() => dispatch(showRole(item.role,item.name))} >{item.name}</button>
                
            
            </div>

           )
       }
       <div>
            <Link to="/GOD">شروع بازی</Link>
       </div>
    </div>
  )
}
