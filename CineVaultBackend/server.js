// server.js
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 5000;

app.use(cors());

// Your OMDb API Key
const OMDB_API_KEY = '42ce5a48';

// List of movie titles
const movieTitles = {
  new: [
    'The Gray Man',
     'Red Notice',
      'Top Gun', 
     'Straw',
     'Inception',
    'Interstellar',
    'Extraction',
    'John Wick',
    'No Time To Die',
    'Tenet',
    'Avatar',


  ],
  upcoming: [
    'Doctor Strange',
     'Adam Project', 
     'Venom',
    'Black Panther',
    'Dune',
    'Mission Impossible',
    'The Flash',
    'Aquaman',
    'The Marvels',
    'Oppenheimer',
    ],
};

// Function to fetch poster from OMDb
const fetchMoviePoster = async (title) => {
  try {
    const res = await axios.get(
      `http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${OMDB_API_KEY}`
    );

    if (res.data.Response === 'True') {
      return {
        title: res.data.Title,
        img: res.data.Poster,
      };
    } else {
      return {
        title,
        img: 'https://via.placeholder.com/147x160?text=No+Image',
      };
    }
  } catch (err) {
    return {
      title,
      img: 'https://via.placeholder.com/147x160?text=Error',
    };
  }
};

// Route: /api/movies
app.get('/api/movies', async (req, res) => {
  const newMovies = await Promise.all(movieTitles.new.map(fetchMoviePoster));
  const upcomingMovies = await Promise.all(movieTitles.upcoming.map(fetchMoviePoster));

  res.json({
    new: newMovies,
    upcoming: upcomingMovies,
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
