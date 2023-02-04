import { useRouter } from 'next/router'

const Category = () => {
  const router = useRouter()
  const { param } = router.query

  if (param === "all")
  {
    return (
      <div>All</div>
    )
  }
  return (
    <div>{param}</div>
  )
}

export default Category