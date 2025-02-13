import React from "react";
import ReactDOM from "react-dom";
import { Modal, Button } from "antd";
import Image from "next/image";
import styles from '../styles/Login.module.css'

function SignUp() {
  const { createRoot } = ReactDOM;
  const { useState } = React;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Sign Up
      </Button>
      <Modal open={isModalOpen} onOk={handleOk} okText='SignUp' onCancel={handleCancel} >
          <Image src="/gobelin.jpg" alt="gobelin" width={100} height={100} />
        <div className={styles.popup}>
          <h2>Create your Hackatweet account</h2>
          <input
            //onChange={(e) => setUser(e.target.value)}
            //value={user.username}
            type="text"
            id="firstname"
            placeholder="firstname"
          />
          <input
            //onChange={(e) => setUser(e.target.value)}
            //value={user.username}
            type="text"
            id="username"
            placeholder="username"
          />
          <input
            //onChange={(e) => setUser(e.target.value)}
            //value={user.username}
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
