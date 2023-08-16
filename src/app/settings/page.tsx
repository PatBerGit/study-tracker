import styles from './page.module.scss'
import Settings from '@/components/settings'

export default function Home() {
  return (
    <main className={styles.mainSettings}>
      <Settings></Settings>
    </main>
  )
}