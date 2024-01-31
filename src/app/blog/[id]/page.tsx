import { mock } from '@/app/dashboard/mock'

const getOneBlog = async (id: string) => {
  return mock.find((e) => e.id === id)
}

export default async function BlogId({ params } ) {
  const data = await getOneBlog(params.id)
  return (
    <>
      {data?.id ? (
        <div>
          <span>{data.desc}</span>
        </div>
      ) : null}
    </>
  )
}
