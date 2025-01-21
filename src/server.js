const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const data = [
  { name: "The Legend of Zelda: Breath of the Wild", image: "https://example.com/zelda.jpg" },
  { name: "Super Mario Odyssey", image: "https://example.com/mario.jpg" },
  { name: "Elden Ring", image: "https://example.com/eldenring.jpg" },
  { name: "Minecraft", image: "https://example.com/minecraft.jpg" },
  { name: "Fortnite", image: "https://example.com/fortnite.jpg" },
];

app.get("/api/games", (req, res) => {
  res.json(data);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
