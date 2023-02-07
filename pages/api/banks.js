import { getBanks } from "@/config/queries/helper";

export default async function handler(req, res) {
  await getBanks().then((data) => res.status(200).json(data));
}
