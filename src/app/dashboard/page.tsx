import Image from 'next/image'
import styles from './dashboar.module.css'
import { mock } from './mock'

export default function Dashboard() {
  return (
    <section className={styles.dashboard}>
      <article>
        <h3>Tus publicaciones</h3>

        <aside>
          {mock.map((p) => (
            <div className={styles.blogs} key={p.id}>
              <img src={p.image} alt='blog image' />
              <h4>{p.title}</h4>
            </div>
          ))}
        </aside>
      </article>

      <article className={styles.formContainer}>
        <h4>Crear publicacion</h4>
        <form className={styles.form} action=''>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' placeholder='title' />
          <label htmlFor='desc'>Description</label>
          <textarea name='' id='desc' placeholder='Description'></textarea>

          <label htmlFor='img'>Image url</label>
          <input type='text' id='img' />

          <button className={styles.btn}>Publicar</button>
        </form>
      </article>
    </section>
  )
}
