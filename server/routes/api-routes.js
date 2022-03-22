const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();

const news_url = `https://newsapi.org/v2/everything?apiKey=${process.env.NEWS_API}&q=`;
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.WEATHER_KEY}&q=`;

router.get("/", async (req, res) => {
  try {
    const urlQuery = news_url + req.query.q;
    const news_response = await axios.get(urlQuery);
    res.json(news_response.data.articles);
  } catch (err) {
    res.json({ msg: err });
  }
});
router.get("/weather", async (req, res) => {
  try {
    const weatherWithQuery = weatherUrl + req.query.q;
    const weatherres = await axios.get(weatherWithQuery);
    res.json(weatherres.data);
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;
