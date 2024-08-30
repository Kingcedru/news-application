// pages/api/news-proxy.js
export default async function handler(req, res) {
  const apiUrl = `https://news-proxy.netlify.app/?apiKey=ce0791cf7cb34350929466338dfff3a9`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from the news API");
    }

    const data = await response.json();

    // Allow CORS for your frontend domain
    res.setHeader("Access-Control-Allow-Origin", "*"); // You can restrict this to your domain in production
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
