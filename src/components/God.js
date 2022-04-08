import React from 'react'
import { useSelector } from 'react-redux'
import { v4 } from 'uuid'
import styles from "../Style/godPage.module.css"
export default function God() {
    const playerInfo = useSelector(state => state.showChracterState.playerRoles)
  return (
    <div>

        {
           playerInfo.map(item => 
            <div key={v4()} className={styles.role}>
                <h3>{item.name}</h3>:<span>{item.role}</span>
            </div>
            ) 
        }
    </div>
  )
}
