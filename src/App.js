import { useEffect, useState } from 'react';
import './App.css';
import Movie from './Movie';

const API_URL = 'http://www.omdbapi.com?apikey=6638d7cb';
function App() {

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("Recep ivedik")

  const searchMovies = async () => {
    const response = await fetch(`${API_URL}&s=${query}`)
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies();
  }, [query])

  return (
    <>
      <div className="App">
        <h1>Movieland</h1>
        <input placeholder="Search Movie" className="Search" onChange={(e) => { setQuery(e.target.value) }} value={query} />
        {
          movies?.length > 0 ? (<Movie movies={movies} />) : (<div style={{ marginTop: 30 }}>Üzgünüm böyle bir şey yok</div>)
        }


      </div>
    </>
  );
}

export default App;
