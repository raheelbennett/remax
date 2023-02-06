import { getFeaturedVendors } from "@/config/queries/helper";

export default function handler(req, res) {
  getFeaturedVendors()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.json(error));
}
