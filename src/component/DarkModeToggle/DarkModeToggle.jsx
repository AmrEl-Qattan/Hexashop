"use client"
import React, { useContext } from 'react'
import styles from './DarkModeToggle.module.css'
import { ThemContext } from '@/context/ThemContext'

export default function DarkModeToggle() {
    const {mode , toggle} = useContext(ThemContext)
  return (
    <div className={styles.mood} onClick={toggle}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🌚</div>
        <div className={styles.switcher}
         style={mode === 'light' ? {left:'2px'} : {right:'2px'}}>

         </div>
    </div>
  )
}
