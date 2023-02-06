import { useRouter } from 'next/router'
import Link from "next/link";
import CardItem from "@/components/cards/CardItem";
import {
  getCategoriesByID
} from "@/config/queries/helper";

const Category = ({categories}) => {
  const router = useRouter()
  const { param } = router.query
  console.log(categories)
  if (param === "all")
  {
    return (
      <div>All</div>
    )
  }
  return (
    <section>
    <h2>{categories[0]['category']}</h2>
      {categories.map((card) => (
        <>
    <div className="card-list grid grid-cols-4 gap-40 m-20">
        <p>{card.name}</p>
        <Link href="/cards/[id]" as={`/cards/${card.id}`} key={card.id}>
          <CardItem card={card} />
        </Link>
    </div>
        </>
      ))}
    </section>
  )
}

export default Category

export async function getServerSideProps({query}) {

  const categories = await getCategoriesByID(query.param[0]);

  return { props: { categories } };
}