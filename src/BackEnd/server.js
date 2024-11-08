// class fields
const express = require('express');
const app = express();
const port = 4000;
// all the movie data
const movieData = {
    "movies": [
      {
        "Title": "Avengers: Infinity War (online)",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
      },
      {
        "Title": "Captain America: Civil War (online)",
        "Year": "2016",
        "imdbID": "tt3498820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
      },
      {
        "Title": "World War Z (online)",
        "Year": "2013",
        "imdbID": "tt0816711",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
      }
    ]
  }

// if we get a request, 'Welcome to Data Respresentation & Querying'
app.get('/api/movies', (req, res) => {
    res.send(movieData);
});

// severs listens for a http request coming in
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});