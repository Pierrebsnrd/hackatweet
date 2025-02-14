import React from "react";
import Image from "next/image";
import styles from '../styles/LastTweets.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";


function LastTweets() {
  const tweet = useSelector((state) => state.tweet.value);
  console.log(tweet);

  

  if (tweet.isPosted) {
    return (
      <div className={styles.lasttweets}>
        <div className={styles.utilisateur}>
          <Image src="/gobelin.jpg" alt="gobelin" width={100} height={100} />
          <p className={styles.firstname}>{tweet.message.firstname}</p>
          <p className={styles.post}>{tweet.message.username}</p>
          <p className={styles.post}>timepost</p>
        </div>
        <div>
          <p className={styles.msg}>{tweet.message.message}</p>
        </div>
        <div className={styles.icone}>
          <FontAwesomeIcon
            icon={faHeart} /* onClick={() => handleHiddenClick()} */
          />
          <FontAwesomeIcon
            icon={faTrash} /* onClick={() => handleHiddenClick()} */
          />
        </div>
      </div>
    );
  }
}

export default LastTweets;
