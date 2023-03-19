const path = require("path")
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { auth, requiredScopes } = require("express-oauth2-jwt-bearer");

// STEP 0: Load env vars
dotenv.config({ path: path.resolve(__dirname, `../.env.${process.env.ENVIRONMENT}`) });

if (!process.env.ISSUER_BASE_URL || !process.env.AUDIENCE || !process.env.BACKEND_PORT) {
  throw "Make sure you have BACKEND_PORT, ISSUER_BASE_URL, and AUDIENCE in your .env file";
}

const PORT = process.env.BACKEND_PORT;

const app = express();

const corsOptions = {
  origin: [
    "http://localhost:3000", // given this is the port the frontend is running on
  ],
};

// Enable CORS
app.use(cors(corsOptions));

const checkJwt = auth({
  audience: process.env.AUDIENCE,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
});

app.get("/", function (req, res) {
  res.json({
    message: "This is the root.",
  });
});

app.get("/api/public", function (req, res) {
  res.json({
    message:
      "Code: 321 // Hello from a public endpoint! You don't need to be authenticated to see this.",
  });
});

app.get("/api/private", checkJwt, function (req, res) {
  res.json({
    message:
      "Hello from a private endpoint! You need to be authenticated to see this.",
  });
});

app.get(
  "/api/private-scoped",
  checkJwt,
  requiredScopes("read:messages"),
  function (req, res) {
    res.json({
      message:
        "Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.",
    });
  }
);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})