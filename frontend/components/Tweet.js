import React from "react";
import styles from "../styles/Tweet.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postTweet, deleteTweet } from "../reducers/tweets";

function Tweet() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const user = useSelector((state) => state.user.value);

  const handlePostMessage = () => {
    fetch("http://localhost:3000/tweets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: message,
        user: user.id
        /* date: Date.now, */
      }),
    })
      .then((response) => response.json())
      .then((data) => {
		console.log(data)
        if (data.result) {
          dispatch(postTweet({ username: user.username, firstname: user.firstname, message: data.message, date: data.date}));
        }
      });
  };

  return (
    <div className={styles.ComposantTweet}>
      <h2 className={styles.titre}>Home</h2>
      <textarea
        className={styles.konecrit}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>
      <div className={styles.conteneurCompteETBouton}>
        <div className={styles.Compteur}>Nombre de caractères : /280</div>
        <button
          className={styles.boutonTweet}
          onClick={() => handlePostMessage()}
        >
          Click
        </button>
      </div>
    </div>
  );
}

export default Tweet;
