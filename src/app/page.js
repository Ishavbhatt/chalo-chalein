import Image from 'next/image'
import styles from './styles/pages/page.module.scss'
import Header from './components/Header/Header'
import { HomeBanner } from './components/Banners/HomeBanner/HomeBanner'

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeBanner />
    </main>
  )
}
