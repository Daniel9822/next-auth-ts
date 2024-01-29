import { createUserWithEmailAndPassword, getAuth, AuthError } from 'firebase/auth'
import { firebaseConfig } from '@/utils/firebaseConfig'
import { initializeApp } from 'firebase/app'
import { NextResponse } from 'next/server'

initializeApp(firebaseConfig)

export async function POST(request: Request) : Promise<NextResponse> {
  const { email, password } = await request.json()

  const auth = getAuth()
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    return new NextResponse(JSON.stringify(user), {
      status: 201
    })
  } catch (error: any) {
    return new NextResponse(error?.message, {
      status: error.statusCode
    })
  }
}
