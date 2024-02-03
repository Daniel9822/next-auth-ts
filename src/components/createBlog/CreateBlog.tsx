'use client'
import React, { ChangeEvent, useState } from 'react'
import styles from './CreateBlog.module.css'
import { Blogs } from '@/types/type'
import { useSession } from 'next-auth/react'
import { createBlog } from '@/services/blogs.services'

export default function CreateBlog() {
  const { data: session } = useSession()
  const [loading, setLoading] = useState(false)

  const [blog, setblog] = useState<Blogs>({
    title: '',
    desc: '',
    author: '',
    image: ''
  })

  const handleBlog = (e: ChangeEvent<HTMLInputElement>) => {
    setblog({
      ...blog,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!session?.user) return
    const { email } = session.user
    setLoading(true)
    await createBlog({ ...blog, author: email || '' })
    setLoading(false)
  }

  return (
    <section className={styles.formContainer}>
      <h4>Crear publicacion</h4>

      <form onSubmit={handleSubmit} className={styles.form} action=''>
        <label htmlFor='title'>Title</label>
        <input
          onChange={handleBlog}
          name='title'
          type='text'
          id='title'
          placeholder='title'
        />

        <label htmlFor='desc'>Description</label>
        <textarea
          onChange={handleBlog}
          name='desc'
          id='desc'
          placeholder='Description'
        ></textarea>

        <label htmlFor='img'>Image url</label>
        <input onChange={handleBlog} name='image' type='text' id='img' />

        <button className={styles.btn}>
          {loading ? 'Loading...' : 'Share'}
        </button>
      </form>
    </section>
  )
}
