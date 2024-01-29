import Image from 'next/image'
import styles from './page.module.css'
import ParticlesComponent from '@/utils/particles'
import Hero from '@/components/hero/Hero'

export default function Home() {
  return (
    <main>
      <ParticlesComponent/>

      <div className={styles.heroContainer}>
        <Hero/>
      </div>

    </main>
  )
}
