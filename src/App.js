import React, { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const data = [
    { name: "The Legend of Zelda: Breath of the Wild", image: "https://example.com/zelda.jpg" },
    { name: "Super Mario Odyssey", image: "https://example.com/mario.jpg" },
    { name: "Elden Ring", image: "https://example.com/eldenring.jpg" },
    { name: "Minecraft", image: "https://example.com/minecraft.jpg" },
    { name: "Fortnite", image: "https://example.com/fortnite.jpg" },
  ];

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredResults = data.filter(
      (item) => item.name && item.name.toLowerCase().includes(term)
    );

    setResults(filteredResults);
  };

  return (
    <div className="app">
      <h1>BUSCADOR YILINROUX</h1>
      <input
        type="text"
        placeholder="Escribe el nombre de un juego..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="results-container">
        {results.map((item, index) => (
          <div key={index} className="result-card">
            <img src={item.image} alt={item.name} className="result-image" />
            <p className="result-name">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
