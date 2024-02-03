import Card from '@/components/Card/Card'
import styles from './blog.module.css'
import { getAllBlog } from '@/services/blogs.services'
import { Metadata } from 'next'


 
export const metadata: Metadata = {
  title: 'Blog-auth | blogs',
  description: 'all blogs the users',
}
 

export default async function BlogPage() {
  const data = await getAllBlog()

  return (
    <>
      <h1 className={styles.title}>All blogs</h1>
      <div className={styles.blogContainer}>
        {data?.map((b) => (
          <Card
            key={b._id}
            id={b._id}
            author={b.author}
            img={b.image}
            title={b.title}
          />
        ))}
      </div>
    </>
  )
}
