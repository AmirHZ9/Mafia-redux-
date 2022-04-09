import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../Style/navbar.module.css"
export default function Navbar() {
  return (
    <div>
        <div>
            <ul className={styles.menu}>
                <li><Link to="/">صفحه نخست</Link> </li>
                <li>مافیا</li>

            </ul>
        </div>
    </div>
  )
}
