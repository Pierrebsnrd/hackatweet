import React from "react";
import ReactDOM from "react-dom";
import { Modal, Button } from "antd";
import Image from "next/image";
import styles from "../styles/Login.module.css";
import {login, logout} from '../reducers/user'
import {useDispatch, useSelector} from 'react-redux'

function SignUp() {
  const { createRoot } = ReactDOM;
  const { useState, useEffect } = React;
  const dispatch = useDispatch();
  //const user = 

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signUpFirstname, setSignUpFirstname] = useState("")
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    fetch("http://localhost:3000/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: signUpFirstname,
          username: signUpUsername,
          password: signUpPassword,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.result) {
            dispatch(login({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword, token: data.token }));
            setSignUpFirstname("");
            setSignUpUsername("");
            setSignUpPassword("");
            setIsModalOpen(false);
          }
        });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

 /*  const handleConnection = () => {
   
  }; */

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Sign Up
      </Button>
      <Modal
        onCancel={handleCancel}
        /* visible={this.state.visible} */
        open={isModalOpen}
        onOk={handleOk}
        okText="SignUp"
      >
        <Image src="/gobelin.jpg" alt="gobelin" width={100} height={100} />
        <div className={styles.popup}>
          <h2>Create your Hackatweet account</h2>
          <input
            onChange={(e) => setSignUpFirstname(e.target.value)}
            value={signUpFirstname}
            type="text"
            id="firstname"
            placeholder="firstname"
          />
          <input
            onChange={(e) => setSignUpUsername(e.target.value)}
            value={signUpUsername}
            type="text"
            id="username"
            placeholder="username"
          />
          <input
            onChange={(e) => setSignUpPassword(e.target.value)}
            value={signUpPassword}
            type="text"
            id="password"
            placeholder="password"
          />
        </div>
      </Modal>
    </>
  );
}

export default SignUp;
