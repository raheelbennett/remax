import { getVendors } from "@/config/queries/helper";

export default async function handler(req, res) {
  await getVendors().then((data) => res.status(200).json(data));
}
