const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();

const news_url = `https://newsapi.org/v2/everything?apiKey=${process.env.NEWS_API}&q=`;
const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?appid=${process.env.WEATHER_KEY}&units=imperial&q=`;
//const geoLocUrl = `https://api.openweathermap.org/geo/1.0/direct?limit=5&appid=${process.env.WEATHER_KEY}&q=`;
//const forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=&lon=&exclude=current,hourly,minutely,alerts&units=imperial&appid=${process.env.WEATHER_KEY}`;

//https://api.openweathermap.org/data/2.5/forecast?appid=80e84043f2204dfda5d64734dc8ede47

//
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
