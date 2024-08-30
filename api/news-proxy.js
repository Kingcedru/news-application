// api/news-proxy.js

export default async function handler(req, res) {
  // URL of the target API that your Angular app is trying to access
  const apiUrl = `https://news-proxy.netlify.app/?apiKey=ce0791cf7cb34350929466338dfff3a9`;

  try {
    // Fetching the data from the target API
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Check if the response is ok
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    // Parsing the response data
    const data = await response.json();

    // Setting CORS headers to allow requests from your frontend
    res.setHeader("Access-Control-Allow-Origin", "*"); // You can restrict this to your Vercel app domain
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Sending the response data back to the client
    res.status(200).json(data);
  } catch (error) {
    // Handling errors and sending a failure response
    res.status(500).json({ error: error.message });
  }
}
