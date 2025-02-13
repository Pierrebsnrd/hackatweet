import React from "react";
import ReactDOM from "react-dom";
import { Button, Modal } from "antd";
import Image from "next/image";
import styles from "../styles/Login.module.css";

function SignIn() {
  const { createRoot } = ReactDOM;
  const { useState } = React;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleConnection = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signInUsername,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(login({ username: signInUsername, token: data.token }));
          setSignInUsername("");
          setSignInPassword("");
          setIsModalOpen(false);
        }
      });
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Sign In
      </Button>
      <Modal
        className
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        okText="SignIn"
        onCancel={handleCancel}
      >
        <Image src="/gobelin.jpg" alt="gobelin" width={100} height={100} />
        <div className={styles.popup}>
          <input
            type="text"
            placeholder="Username"
            id="signInUsername"
            onChange={(e) => setSignInUsername(e.target.value)}
            value={signInUsername}
          />
          <input
            type="password"
            placeholder="Password"
            id="signInPassword"
            onChange={(e) => setSignInPassword(e.target.value)}
            value={signInPassword}
          />
          <button id="connection" onClick={() => handleConnection()}>
            Connect
          </button>
        </div>
      </Modal>
    </>
  );
}

export default SignIn;
