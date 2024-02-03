import blog from '@/models/blog'
import { connect } from '@/utils/mongooseConnect'
import { NextResponse } from 'next/server'

export async function POST(request: Request): Promise<NextResponse> {
  const body = await request.json()

  try {
    await connect()
    const create = await blog.create(body)
    return new NextResponse(JSON.stringify(create), { status: 201 })
  } catch (error: any) {
    return new NextResponse(error.message, {
      status: 400
    })
  }
}

export async function GET(request: Request): Promise<NextResponse> {
  try {
    await connect()

    const blogs = await blog.find({})
    if (!blogs?.length) {
      return new NextResponse('Not found', { status: 404 })
    }

    return new NextResponse(JSON.stringify(blogs), { status: 200 })
  } catch (error) {
    return new NextResponse('error', {
      status: 400
    })
  }
}
