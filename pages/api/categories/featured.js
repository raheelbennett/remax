import { getFeaturedCategories } from "@/config/queries/helper";

export default function handler(req, res) {
  getFeaturedCategories().then((data) => res.status(200).json(data));
}
