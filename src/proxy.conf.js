const PROXY_HOST = "https://news-proxy.netlify.app/";
const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: PROXY_HOST,
    secure: false,
  },
];

module.exports = PROXY_CONFIG;
