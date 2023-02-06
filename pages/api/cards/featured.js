import { getFeaturedCards } from "@/config/queries/helper";

export default function handler(req, res) {
  getFeaturedCards().then((data) => res.status(200).json(data));
}
