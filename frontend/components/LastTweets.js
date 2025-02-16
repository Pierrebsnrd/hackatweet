import React from "react";
import Image from "next/image";
import styles from "../styles/LastTweets.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import tweet from "../reducers/tweets";

function LastTweets() {
  const tweet = useSelector((state) => state.tweet.value);
  console.log(tweet);

  const [tweetList, setTweetList] = useState([]);

  console.log("tweetlis", tweetList);

  useEffect(() => {
    fetch("http://localhost:3000/tweets")
      .then((response) => response.json())
      .then((data) => {
        setTweetList([...tweetList, data]);
      });
  }, []);

  let newTweet = tweetList.map((data, i) => {
    console.log(data);
    return (
      <div key={i}>
        <div className={styles.utilisateur}>
          <Image src="/gobelin.jpg" alt="gobelin" width={100} height={100} />
          <p className={styles.firstname}>{data[i].firstname}</p>
          <p className={styles.post}>{data[i].username}</p>
          <p className={styles.post}>{/* tweet.date */} </p>
        </div>
        <div>
          <p className={styles.msg}>{data[i].message}</p>
        </div>
        <div className={styles.icone}>
          <FontAwesomeIcon icon={faHeart} onClick={() => handleHiddenClick()} />
          <FontAwesomeIcon icon={faTrash} onClick={() => handleHiddenClick()} />
        </div>
      </div>
    );
  });
  //let tweetOfDb = [];

  /* for (let i of tweetList){
 let newDbTweet =
   

    TABLEAUFINAL.push(newDbTweet)
    console.log(TABLEAUFINAL)





  

 */
  if (tweet.isPosted) {
    return <div className={styles.lasttweets}>{newTweet}</div>;
  }
}

export default LastTweets;
