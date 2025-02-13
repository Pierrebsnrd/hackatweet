import React from "react";
import Image from "next/image";
import styles from '../styles/LastTweets.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";


function LastTweets() {
  return (
    <div className={styles.lasttweets}>
      <div className={styles.utilisateur}>
        <Image src="/gobelin.jpg" alt="gobelin" width={100} height={100} />
        <p className={styles.firstname}>firstname</p>
        <p className={styles.post}>username</p>
        <p className={styles.post}>timepost</p>
      </div>
      <div>
        <p className={styles.msg}>message</p>
      </div>
      <div className={styles.icone}>
        <FontAwesomeIcon icon={faHeart} /* onClick={() => handleHiddenClick()} *//>
        <FontAwesomeIcon icon={faTrash} /* onClick={() => handleHiddenClick()} *//>
      </div>
    </div>
  );
}

export default LastTweets;
