import express from "express";
import serverless from "serverless-http";
import dotenv from "dotenv";

dotenv.config();

const api = express();
const router = express.Router();
const RECIPE_API_KEY = process.env.RECIPE_API_KEY; // Use your Spoonacular API key

router.get("/recipes", async (req, res) => {
    console.log("Received request with query:", req.query.query);

    try {
        const query = req.query.query || "vegetarian";
        console.log("Fetching recipes for:", query);

        const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=5&apiKey=${RECIPE_API_KEY}`
        );

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log("Received data:", data);

        res.json({ recipes: data.results });
    } catch (error) {
        console.error("Error fetching recipes:", error);
        res.status(500).json({ error: "Server error" });
    }
});

api.use("/api", router);

export const handler = serverless(api);
