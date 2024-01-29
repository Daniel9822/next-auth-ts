'use client'
import Link from 'next/link'
import styles from '../../dashboar.module.css'
import { useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface Credentials {
  email: string
  password: string
}

export default function Login() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: ''
  })

  const handleCredentials = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    signIn('credentials', {
      email: credentials.email,
      password: credentials.password
    })
  }

  if (session?.user) {
    router.push('/dashboard')
  }

  return (
    <section className={styles.loginContainer}>
      <form onSubmit={handleLogin} className={styles.form} action=''>
        <label htmlFor='email'>Email</label>
        <input
          onChange={handleCredentials}
          name='email'
          required
          type='email'
          placeholder='test@gmail.com'
        />

        <label htmlFor='password'>Password</label>
        <input
          onChange={handleCredentials}
          required
          type='password'
          name='password'
          id='password'
        />

        <button className={styles.btn} type='submit'>
          { status === 'loading' ? 'Loading...' : 'Sing in' }
        </button>
      </form>

      <button onClick={() => signIn('google')} className={styles.btnGoogle}>
        start with google
      </button>

      <span className={styles.spanRegister}>
        You do not have an account?{' '}
        <Link href={'/dashboard/register'}>click here</Link>
      </span>
    </section>
  )
}
