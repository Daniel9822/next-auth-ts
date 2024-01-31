import { mock } from '@/app/dashboard/mock'
import Card from '@/components/Card/Card'
import styles from './blog.module.css'

const getAllBlogs = async () => {
  return mock
}

export default async function BlogPage() {
  const data = await getAllBlogs()

  return (
    <>
      <h1 className={styles.title}>All blogs</h1>
      <div className={styles.blogContainer}>
        {data?.map((b) => (
          <Card
            key={b.id}
            id={b.id}
            author={b.author}
            img={b.image}
            title={b.title}
          />
        ))}
      </div>
    </>
  )
}
