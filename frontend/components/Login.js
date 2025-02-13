import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Image from "next/image";
import styles from '../styles/Login.module.css'

function Login() {
  return (
    <div className={styles.login}>
      <Image src='/gobelin.jpg' alt="gobelin" width={100} height={100} />
      <div className={styles.modale}>
      <h1>See what's happening</h1>
      <h2>Join Hackatweet today</h2>
      <SignUp/>
      <h3>Already have an account ?</h3>
      <SignIn/>
      </div>
    </div>
  )
}

export default Login