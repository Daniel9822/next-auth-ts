import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'

import { firebaseConfig } from '@/utils/firebaseConfig'
import { initializeApp } from 'firebase/app'

const app = initializeApp(firebaseConfig)

interface MyCredentials extends Credential {
  email: string,
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
      async authorize(credentials: MyCredentials) {
        const { email, password } = credentials

        const auth = getAuth()
        try {
          const { user } = await signInWithEmailAndPassword(auth, email, password)

          if(user) {
            return user
          }
        } catch (error) {
          throw new Error('invalid user')
        }
      }
    })
  ],
  pages: {
    signIn: '/dashboard/login'
  }
})

export { handler as GET, handler as POST }
