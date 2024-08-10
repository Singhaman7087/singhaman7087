import React from 'react'
import styles from '../styles/Home.module.css'
import Button from '../components/Button'
export default function Home() {
  return (
    <div>
        <h1 className={styles.colorName}>Hi, this is Aman </h1>
        <Button title={'Go to Link'}/>
        <Button title={'Quick call'}/>
    </div>
  )
}
