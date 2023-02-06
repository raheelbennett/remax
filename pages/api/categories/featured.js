import { getFeaturedCategories } from "@/config/queries/helper";

export default async function handler(req, res) {
  await getFeaturedCategories().then((data) => res.status(200).json(data));
}
