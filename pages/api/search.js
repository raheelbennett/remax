const { searchBanks, searchCards, searchVendors } = require("../../config/queries/helper");

export default async function handler(req, res) {
  const { searchKeyword } = req.body;
  const banks = await searchBanks(searchKeyword);
  const cards = await searchCards(searchKeyword);
  const vendors = await searchVendors(searchKeyword);
  res.status(200).json({ banks, cards, vendors });
}
