const PROXY_HOST =
  "https://news-proxy.netlify.app/?apiKey=ce0791cf7cb34350929466338dfff3a9";
const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: PROXY_HOST,
    secure: false,
  },
];

module.exports = PROXY_CONFIG;
