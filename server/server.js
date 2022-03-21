const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;
require("dotenv").config();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", require("./routes/api-routes"));

app.listen(PORT, () => {
  if (process.env.NEWS_API === undefined) {
    throw new Error(
      `Create a .env file with 'NEWS_API=<"YOUR_API_KEY"> from newsapi.org`
    );
  }
  console.log(`Listening on port ${PORT}`);
});
