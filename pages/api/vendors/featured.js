import { getFeaturedVendors } from "@/config/queries/helper";

export default async function handler(req, res) {
  await getFeaturedVendors()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.json(error));
}
