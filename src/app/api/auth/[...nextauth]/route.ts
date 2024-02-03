import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'

import { firebaseConfig } from '@/utils/firebaseConfig'
import { initializeApp } from 'firebase/app'

const app = initializeApp(firebaseConfig)

interface MyCredentials extends Credential {
  email: string
  password: string
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID || '',
      clientSecret: process.env.SECRET_ID || ''
    }),
    Credentials({
      id: 'credentials',
      name: 'Credentials',
       // @ts-ignore
      async authorize(credentials: MyCredentials) {
        if (!credentials) return null

        const { email, password } = credentials as MyCredentials

        try {
          const auth = getAuth()
          const { user } = await signInWithEmailAndPassword(
            auth,
            email,
            password
          )

          if (user) {
            return user
          }
        } catch (error) {
          return null
        }
      }
    })
  ],
  pages: {
    signIn: '/dashboard/login'
  }
})

export { handler as GET, handler as POST }
