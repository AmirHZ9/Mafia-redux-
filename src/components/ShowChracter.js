import React from 'react'
import { useSelector } from 'react-redux'

export default function ShowChracter() {
    const playerRoles=useSelector(state => state.showChracterState.playerRoles)    
   
console.log(playerRoles)
    return (
    <div>
       {
           playerRoles.map(item =>
            <div>
                <p>{item.name}</p>
                <span>{item.role}</span>
            </div>

           )
       }

       
    </div>
  )
}
