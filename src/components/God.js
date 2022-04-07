import React from 'react'
import { useSelector } from 'react-redux'
import { v4 } from 'uuid'

export default function God() {
    const playerInfo = useSelector(state => state.showChracterState.playerRoles)
  return (
    <div>

        {
           playerInfo.map(item => 
            <div key={v4()} className="d-flex justify-content-center align-items-baseline">
                <h3>{item.name}</h3>:<span>{item.role}</span>
            </div>
            ) 
        }
    </div>
  )
}
