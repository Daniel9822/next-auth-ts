import blog from '@/models/blog'
import { connect } from '@/utils/mongooseConnect'
import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'

export async function GET(request: NextApiRequest) {
  const url = request.url

  if (!url) throw new Error('id is require')
  const id = new URL(url).pathname.split('/').pop()

  try {
    await connect()
    const getBlog = await blog.findById(id)
    return new NextResponse(JSON.stringify(getBlog), { status: 200 })
  } catch (error: any) {
    return new NextResponse(error, { status: 400 })
  }
}
