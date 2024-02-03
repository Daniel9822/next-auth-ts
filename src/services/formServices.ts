import type { FormOneStep, FormStepTwo } from '@/types/type'

const PATH = `${process.env.NEXT_PUBLIC_API_URL}/form`

export const createFormOrUpdate = async (form : (FormOneStep | FormStepTwo)) => {
  try {
    const response = await fetch(PATH, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form),
      cache: 'no-store'
    })

    const data = await response.json()
    return data
  } catch (error: any) {
    return {
      error: true,
      message: error.message
    }
  }
}

export const getForm = async (email: string | undefined | null) => {
  if (!email) return
  try { 
    const response = await fetch(`${PATH}?id=${email}`, {
      method: 'GET',
      cache: 'no-store'
    })
    const data = await response.json()
    if (data?.userId) { 
      return data
    }
  } catch (error: any) {
    return {
      error: true
    }
  }
}
