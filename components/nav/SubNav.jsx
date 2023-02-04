import Link from 'next/link'


const categories = [
  {
    name: 'Gas',
    slug: 'gas'
  },
  {
    name: 'Restaurants',
    slug: 'restaurants'
  },
  {
    name: 'Groceries',
    slug: 'groceries'
  },
  {
    name: 'Streaming',
    slug: 'streaming'
  },
  {
    name: 'Transit',
    slug: 'transit'
  },
  {
    name: 'Recurring Bills',
    slug: 'recurring-bills'
  }
]
const SubNav = () => {
  return (
 <div className="sub-nav p-2 bg-blue-200 text-black rounded-md mx-2">
    <ul className="flex justify-between">
      { categories.map((category) => (
        <li key={category.slug}>
          <Link href={`/categories/${category.slug}`}>{category.name}</Link>
        </li>
      )) }
    </ul>
  </div>
  )
}

export default SubNav