import React from 'react'
import styles from './Navbar.module.css'; 

export default function Navbar() {
  return (
    <div className={styles.nav}>
        <h3>Home</h3>
        <h3>History</h3>
    </div>
  )
}
