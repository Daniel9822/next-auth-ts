const PATH = process.env.NEXT_PUBLIC_API_URL

export const registerUser = async ({
  email,
  password
}: {
  email: string
  password: string
}) => {
  try {
    const response = await fetch(`${PATH}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password }),
      cache: 'no-store'
    })

    const user = await response.json()

    return user
  } catch (error: any) {
    return {
      error: true,
      message: error.message
    }
  }
}
