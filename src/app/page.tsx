import Image from "next/image";
import Link from "next/link";
import nextImage from '../../public/next.svg';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src={nextImage} alt='next.js' width={200} height={100} />
      <div className={styles.contentTitle}>
        <h1>Olá Mundo!</h1>
        <p>Testando um PWA com next.js versão 14.1.0</p>
      </div>
      <Link href="/home" className={styles.link}>Home</Link>
    </main>
  );
}
