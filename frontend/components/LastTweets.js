import React from "react";
import Image from "next/image";
import styles from '../styles/LastTweets.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import tweet from '../reducers/tweets'

function LastTweets() {
  const tweet = useSelector((state) => state.tweet.value);
  console.log(tweet);


  const [tweetList, setTweetList] = useState([]);

  console.log("tweetlis", tweetList)

  useEffect(() => {
    fetch('http://localhost:3000/tweets')
      .then(response => response.json())
      .then(data => {
        setTweetList(...tweetList, data);
      });
  }, [tweetList]);
//let tweetOfDb = [];
  
  for (let i of tweetList){
 let newDbTweet =
    <>
      <div className={styles.utilisateur}>
        <Image src="/gobelin.jpg" alt="gobelin" width={100} height={100} />
        <p className={styles.firstname}>{tweet.firstname[i]}</p>
        <p className={styles.post}>{tweet.username[i]}</p>
        <p className={styles.post}>{tweet.date[i]} </p>
      </div>
      <div>
        <p className={styles.msg}>{tweet.message[i]}</p>
      </div>
      <div className={styles.icone}>
        <FontAwesomeIcon
          icon={faHeart} /* onClick={() => handleHiddenClick()} */
        />
        <FontAwesomeIcon
          icon={faTrash} /* onClick={() => handleHiddenClick()} */
        />
      </div>
    </>

    TABLEAUFINAL.push(newDbTweet)
    console.log(TABLEAUFINAL)

// rajouter les tweets postés dans TABLEAUFINAL//
//
//


  let newTweet = tweetList.map((data,i) => {
    TABLEAU.push(data).then(data => {
      console.log(data)
    })
   })


  if (tweet.isPosted) {
    return (
      <div className={styles.lasttweets}>
        {newTweet}
      </div>
    );
  }
}
}

export default LastTweets;
