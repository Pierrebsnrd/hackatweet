import styles from "../styles/Home.module.css";
import Login from "../components/Login";
import Image from "next/Image";

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.zolidessin}>
          <Image src="/background.jpg" alt="background" width={800} height={1000} />
        </div>
        <div className={styles.login}>
          <Login />
        </div>
      </main>
    </div>
  );
}

export default Home;
