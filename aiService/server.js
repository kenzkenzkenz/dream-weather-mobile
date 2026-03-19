import dotenv from "dotenv";
import express from "express";
import fetch from "node-fetch";

dotenv.config();

const app = express();

let cachedFact = null;
let lastFetchTime = 0;

const CACHE_DURATION = 5 * 60 * 1000;

app.get("/", (req, res) => {
    res.send("AI server is running");
});

app.get("/fact", async (req, res) => {
    try {
        if (cachedFact && Date.now() - lastFetchTime < CACHE_DURATION) {
            return res.json({ fact: cachedFact });
        }

        const prompts = [
            "One surprising weather fact. Max 20 words. No intro.",
            "One weird weather fact. Max 20 words.",
            "One extreme climate fact. Max 20 words.",
        ];

        const prompt =
            prompts[Math.floor(Math.random() * prompts.length)];

        const response = await fetch("https://api.cohere.ai/v2/chat", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.CO_API_KEY}`,
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                model: "command-a-03-2025",
                messages: [
                    {
                        role: "user",
                        content: prompt,
                    }
                ],
            }),
        });

        const data = await response.json();
        console.log(data);

        let fact = data?.message?.content?.[0]?.text?.trim();

        if (!fact) {
            fact =
                "Lightning is five times hotter than the sun’s surface.";
        }

        cachedFact = fact;
        lastFetchTime = Date.now();

        res.json({ fact });
    } catch (err) {
        console.error(err);
        res.json({
            fact: "Raindrops can fall at speeds up to 22 mph.",
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`AI server running on port ${PORT}`);
});