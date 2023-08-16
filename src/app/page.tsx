import Image from 'next/image'
import styles from './page.module.scss'
import Header from '@/components/header'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
    </main>
  )
}
