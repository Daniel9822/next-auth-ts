import { Blogs } from '@/types/type'

const PATH = process.env.NEXT_PUBLIC_API_URL

export const createBlog = async (blog: Blogs) => {
  try {
    const response = await fetch(`${PATH}/blog`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(blog),
      cache: 'no-store'
    })

    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    throw new Error('somenthing went wrong')
  }
}

export const getAllBlog = async (): Promise<Blogs[]> => {
  try {
    const response = await fetch(`${PATH}/blog`, { cache: 'no-store' })
    const data = response.json()
    return data
  } catch (error: any) {
    console.log(error.message)
    throw new Error('')
  }
}

export const getOneBlog = async (id: string): Promise<Blogs> => {
  try {
    const response = await fetch(`${PATH}/blog/${id}`, { cache: 'no-store' })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    throw new Error('somenthing went wrong')
  }
}
