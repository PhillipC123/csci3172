import express from "express";
import serverless from "serverless-http";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const api = express();
const router = express.Router();
const RECIPE_API_KEY = process.env.RECIPE_API_KEY;  // Use your Spoontacular API key

router.get("/recipes", async (req, res) => {
    console.log('Received request with query:', req.query.query);  // Check the query
    try {
        const query = req.query.query || "vegetarian";
        console.log('Fetching recipes for:', query);  // Check the query being used

        const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=5&apiKey=${RECIPE_API_KEY}`
        );
        const data = await response.json();

        console.log('Received data:', data);  // Log the API response

        res.json({ recipes: data.results });
    } catch (error) {
        console.error('Error fetching recipes:', error);
        res.status(500).json({ error: "Server error" });
    }
});


api.use("/api", router);

export const handler = serverless(api);
