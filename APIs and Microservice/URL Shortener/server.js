require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use("/public", express.static(`${process.cwd()}/public`));

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });
// Model ------------------------
const urlSchema = new mongoose.Schema({
  original: { type: String, required: true },
  shortened: { type: String, unique: true },
});
const Url = mongoose.model("url", urlSchema);

// String generator function --------
const generateString = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

// Routes -----------------------
app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// Your first API endpoint
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.post("/api/shorturl", async (req, res) => {
  try {
    const original = req.body.url;
    const urlRegex = new RegExp(
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
    );
    if (!original.match(urlRegex)) {
      return res.json({ error: "Invalid URL" });
    }

    const shortened = generateString();

    const newUrl = await new Url({
      original,
      shortened,
    });
    newUrl.save();

    return res.json({
      original_url: newUrl.original,
      short_url: newUrl.shortened,
    });
  } catch (error) {
    return res.json(error);
  }
});

app.get("/api/shorturl/:short_url", async (req, res) => {
  const short_url = req.params.short_url;
  const url = await Url.findOne({ shortened: short_url });
  if (!url) return res.json({ error: "Url not Found" });

  return res.redirect(url.original);
});
// Server ----------------------------
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
