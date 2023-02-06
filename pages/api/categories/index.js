import { getCategories } from "@/config/queries/helper";

export default async function handler(req, res) {
  await getCategories().then((data) => res.status(200).json(data));
}
