import { NextResponse } from 'next/server'
import Form from '@/models/form'
import { connect } from '@/utils/mongooseConnect'
import { NextApiRequest } from 'next'

export async function POST(request: Request): Promise<NextResponse> {
  const data = await request.json()

  try {
    await connect()
    const isExist = await Form.findOne({ userId: data.userId })
  
    if (isExist?._id) {
      const { _id: id } = isExist
      const updateForm = await update(id, data)
      return new NextResponse(JSON.stringify(updateForm), { status: 200 })
    }

    const createForm = await Form.create(data)
    return new NextResponse(JSON.stringify(createForm), {
      status: 201
    })
  } catch (error: any) {
    return new NextResponse(error.message, {
      status: 400
    })
  }
}

const update = async (id: string, data) => {
  try {
    const isExist = await Form.findByIdAndUpdate({ _id: id }, data, {
      new: true
    })
    return isExist
  } catch (error) {
    throw new Error('')
  }
}

export async function GET(request: NextApiRequest): Promise<NextResponse> {
  const url = request.url

  if (!url) return new NextResponse('', { status: 400 })
  const path = new URL(url)
  const searchParams = new URLSearchParams(path.search)
  const id = searchParams.get('id')

  try {
    await connect()
    const findForm = await Form.findOne({ userId: id })
    return new NextResponse(JSON.stringify(findForm), {
      status: 200
    })
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        error: true
      }),
      { status: 400 }
    )
  }
}
