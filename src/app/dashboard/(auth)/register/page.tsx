'use client'
import Link from 'next/link'
import styles from '../../dashboar.module.css'
import { useState } from 'react'
import { registerUser } from '@/services/registeUser'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface UserInfo {
  email: string
  password: string
}

export default function Register() {
  const { status } = useSession()
  const [err, setErr] = useState('')
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: '',
    password: ''
  })
  const router = useRouter()

  const handleInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })

    setErr('')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { email, password } = userInfo
    const createUser = await registerUser({ email, password })

    if (createUser.error) {
      setErr('somenthing went wrong!')
      return
    }

    signIn('credentials', {
      email,
      password
    })

    router.push('/dashboard')
  }

  return (
    <section className={styles.loginContainer}>
      { err && <span>{err}</span> }
      <form onSubmit={handleSubmit} className={styles.form} action=''>
        <label htmlFor='email'>Email</label>
        <input
          onChange={handleInfo}
          required
          type='email'
          placeholder='test@gmail.com'
          name='email'
        />

        <label htmlFor='password'>Password</label>
        <input
          onChange={handleInfo}
          required
          type='password'
          name='password'
          id='password'
        />

        <button className={styles.btn} type='submit'>
          { status === 'loading' ? 'Loading...' : 'Register' }
        </button>
      </form>

      <span className={styles.spanRegister}>
        you have an account? <Link href={'/dashboard/login'}>click here</Link>
      </span>
    </section>
  )
}
