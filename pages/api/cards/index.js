import { getCards } from "@/config/queries/helper";

export default async function handler(req, res) {
  await getCards().then((data) => res.status(200).json(data));
}
