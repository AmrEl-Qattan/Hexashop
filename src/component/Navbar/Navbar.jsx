"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import styles from './Navbar.module.css'
import Button from '../Button/Button'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import { ThemContext } from '@/context/ThemContext'

export default function Navbar() {
  const {mode , toggle} = useContext(ThemContext)
  return (
    <nav className="navbar navbar-expand-lg ">
    <div className="container">
      <Link className="navbar-brand text-warning" href="/">HEXASHOP</Link>
      <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon "></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <DarkModeToggle/>
          <li className="nav-item">
            <Link className={`${mode} link `} aria-current="page" href="/">Home</Link>
          </li>
          {/* <li className="nav-item">
            <Link className={`${mode} link`} aria-current="page" href="/about">About</Link>
          </li> */}
          <li className="nav-item">
            <Link className={`${mode} link`} aria-current="page" href="/products">Products</Link>
          </li>
          {/* <li className="nav-item">
            <Link className={`${mode} link`} aria-current="page" href="/portfolio">Portfolio</Link>
          </li> */}
          <li className="nav-item">
            <Link className={`${mode} link`} aria-current="page" href="/contact">Contact</Link>
          </li>
        </ul>
        {/* <Button/> */}
      </div>
     
    </div>
  </nav>
  )
}
