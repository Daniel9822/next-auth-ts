'use client'
import { signOut, useSession } from 'next-auth/react'
import styles from './logout.module.css'
import { useRouter } from 'next/navigation'

export default function Logout() {
  const { data: session } = useSession()
  const router = useRouter()

  // if(!session?.user) {
  //   router.push('/dashboard/login')
  // }


  return (
    <>
      {session?.user && (
        <button className={styles.logout} onClick={() => signOut()}>
          Logout
        </button>
      )}
    </>
  )
}
