const express = require("express"); // Changed from import to require for CommonJS compatibility
const serverless = require("serverless-http");
const fetch = require("node-fetch"); // Use `require` for `node-fetch` v2
const dotenv = require("dotenv");

dotenv.config();

const api = express();
const router = express.Router();
const RECIPE_API_KEY = process.env.RECIPE_API_KEY;

router.get("/recipes", async (req, res) => {
    console.log('Received request with query:', req.query.query);
    try {
        const query = req.query.query || "vegetarian";
        
        console.log('Fetching recipes for:', query);
        const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=5&apiKey=${RECIPE_API_KEY}`
        );
        const data = await response.json();

        console.log('Received data:', data);

        res.json({ recipes: data.results });
    } catch (error) {
        console.error('Error fetching recipes:', error);
        res.status(500).json({ error: "Server error" });
    }
});

api.use("/api", router);

module.exports.handler = serverless(api);
