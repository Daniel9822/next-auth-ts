import { getOneBlog } from '@/services/blogs.services'
import styles from '../blog.module.css'
import { Metadata, ResolvingMetadata } from 'next'

interface Props {
  params: { id: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const data = await getOneBlog(params.id)

  return {
    title: `Blog-auth | ${data.title}`,
    description: data.desc,

  }
}

export default async function BlogId({ params }: Props) {
  const data = await getOneBlog(params.id)

  return (
    <>
      {data?._id ? (
        <section>
          <div className={styles.imgContainer}>
            <img
              className={styles.blogImage}
              src={data.image}
              alt='blog picture'
            />
            <span className={styles.author}>{data.author}</span>
          </div>
          <span>{data.desc}</span>
        </section>
      ) : null}
    </>
  )
}
