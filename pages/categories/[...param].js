import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import CardList from "@/components/cards/CardList";
import { getCategoriesByID } from "@/config/queries/helper";

const Category = ({ categories }) => {
  const router = useRouter();
  const { param } = router.query;

  return (
    <section className="md:w-1/2">
      <h2 className="text-2xl font-bold m-8 mt-10 dark:text-gray-300">{categories[0]["category"]}</h2>
      <div className="card-list grid grid-cols-1 gap-10 m-10">
     <CardList cards={categories} string="grid grid-cols-2" />
      </div>
    </section>
  );
};

export default Category;

export async function getServerSideProps({ query }) {
  const categories = await getCategoriesByID(query.param[0]);

  return { props: { categories } };
}
