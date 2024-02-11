import Link from 'next/link'
import styles from './home.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <h1>Home</h1>
      <Link href="/" className={styles.link}>Voltar</Link>
    </div>
  )
}