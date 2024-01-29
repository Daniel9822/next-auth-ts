import Image from 'next/image'
import styles from './Hero.module.css'
import TypeComponent from '@/utils/typeAnimation'

export default function Hero() {
  return (  
    <section className={styles.container}>
      <article className={styles.text}>
        <h1>Lorem ipsum, dolor <span>adipisicing elit</span></h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
          molestiae dolorum magnam corrupti maxime cumque ullam, veniam
          consectetur consequuntur quidem rem commodi dolore quo, libero
          repellat soluta. Odio, porro sed!
        </p>
        <br/>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
          molestiae dolorum magnam corrupti maxime cumque ullam, veniam
          consectetur consequuntur quidem rem commodi dolore quo, libero
          repellat soluta. Odio, porro sed!
        </p>

        <TypeComponent/>
      </article>

      <article>
        <Image className={styles.img} src={'/img1.jpg'} width={400} height={400} alt='image' />
      </article>
    </section>
  )
}
