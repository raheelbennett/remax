import { getFeaturedCards } from "@/config/queries/helper";

export default async function handler(req, res) {
  await getFeaturedCards().then((data) => res.status(200).json(data));
}
