export const registerUser = async ({
  email,
  password
}: {
  email: string
  password: string
}) => {
  try {
    const response = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
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
