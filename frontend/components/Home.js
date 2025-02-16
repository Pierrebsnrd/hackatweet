import styles from "../styles/Home.module.css";
import Login from "../components/Login";
import Image from "next/image";
import { useSelector } from "react-redux";
import Tweet from "./Tweet";
import LastTweets from "./LastTweets";
import Trends from "./Trends";

function Home() {
  const user = useSelector((state) => state.user.value);
  //console.log(user)

  if (user.token) {
    return (
      <div className={styles.accueil}>
        <div className={styles.gauche}>
          <div className={styles.imageHautGauche}>
            <Image src="/gobelin.jpg" alt="gobelin" width={100} height={100} />
          </div>
          <div className={styles.utilisateur}>
            <div className={styles.content}>
              <Image
                src="/gobelin.jpg"
                alt="gobelin"
                width={100}
                height={100}
              />
              <div>
                <p className={styles.firstname}>{user.firstname}</p>
                <p className={styles.username}>{user.username}</p>
              </div>
            </div>
            <button className={styles.boutonGauche}>Logout</button>
          </div>
        </div>
        <div className={styles.middle}>
          <Tweet className={styles.tweet} />
          <LastTweets className={styles.lasttweet} />
        </div>
        <Trends />
      </div>
    );
  }

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.zolidessin}>
          <Image
            src="/background.jpg"
            alt="background"
            width={800}
            height={1000}
          />
        </div>
        <div className={styles.login}>
          <Login />
        </div>
      </main>
    </div>
  );
}

export default Home;
