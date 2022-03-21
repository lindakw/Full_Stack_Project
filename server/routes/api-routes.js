const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();

const news_url = `https://newsapi.org/v2/everything?apiKey=${process.env.NEWS_API}&q=`;

router.get("/", async (req, res) => {
  try {
    const urlQuery = news_url + req.query.q;
    const news_response = await axios.get(urlQuery);
    res.json(news_response.data.articles);
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;
