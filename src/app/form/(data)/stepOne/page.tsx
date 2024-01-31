'use client'
import React, { useEffect, useState } from 'react'
import styles from '../../form.module.css'
import type { FormOneStep } from '@/types/type'
import { createFormOrUpdate, getForm } from '@/services/formServices'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function StepOne() {
  const router = useRouter()
  const { data: session } = useSession()

  const [info, setInfo] = useState<FormOneStep>({
    name: '',
    lastName: '',
    country: '',
    phone: ''
  })

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = await createFormOrUpdate({...info, userId: session?.user?.email})
    if (data.error) {
      throw new Error('somenting went wrong')
    }

    router.push('/form/stepTwo')
  }

  useEffect(() => {
    if (session?.user?.email) {
      const getDataForm = async () => {
        const data = await getForm(session?.user?.email)
        setInfo(data)
      }
      getDataForm()
    }
  }, [session?.user])

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <p className={styles.title}> Fill information</p>

        <div className={styles.flex}>
          <label>
            <input
              className={styles.input}
              type='text'
              placeholder=''
              required
              onChange={handleForm}
              name='name'
              value={info?.name}
            />
            <span>Firstname</span>
          </label>

          <label>
            <input
              className={styles.input}
              type='text'
              placeholder=''
              required
              name='lastName'
              onChange={handleForm}
              value={info?.lastName}
            />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input
            name='country'
            className={styles.input}
            type='text'
            placeholder=''
            required
            onChange={handleForm}
            value={info?.country}
          />
          <span>Country</span>
        </label>

        <label>
          <input
            name='phone'
            className={styles.input}
            type='text'
            placeholder=''
            required
            onChange={handleForm}
            value={info?.phone}
          />
          <span>Phone</span>
        </label>

        <button className={styles.submit}> Next</button>
      </form>
    </div>
  )
}
