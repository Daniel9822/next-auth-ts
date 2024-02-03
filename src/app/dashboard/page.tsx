import styles from './dashboar.module.css'
import { mock } from './mock'
import CreateBlog from '@/components/createBlog/CreateBlog'

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

      <CreateBlog/>
    </section>
  )
}
