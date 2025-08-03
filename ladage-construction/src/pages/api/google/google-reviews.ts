export default async function handler(req, res) {
  const PLACE_ID = 'your_place_id';
  const API_KEY = process.env.GOOGLE_API_KEY;

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews&key=${API_KEY}`
  );
  const data = await response.json();

  if (!data.result || !data.result.reviews) {
    return res.status(500).json({ error: "Failed to fetch reviews" });
  }

  res.status(200).json({ reviews: data.result.reviews });
}
