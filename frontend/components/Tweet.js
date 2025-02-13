import React from 'react'
import styles from '../styles/Tweet.module.css'

function Tweet() {

  return (
  
      <div className={styles.ComposantTweet}>
          <h2 className={styles.titre}>Ca tweete fort</h2>
          <textarea className={styles.konecrit} onChange></textarea>
          <div className={styles.conteneurCompteETBouton}>
            <div className={styles.Compteur}>Nombre de caractères : /180</div>
            <button className={styles.boutonTweet} onClick></button>
          </div>
    </div>
  )
}

export default Tweet