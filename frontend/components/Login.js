import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Image from "next/Image";
import styles from '../styles/Login.module.css'

function Login() {
  return (
    <div className={styles.login}>
      <Image src='/gobelin.jpg' alt="gobelin" width={100} height={100} />
      <h1>See what's happening</h1>
      <div className={styles.modale}>
      <SignIn/>
      <SignUp/>
      </div>
    </div>
  )
}

export default Login