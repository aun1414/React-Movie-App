
import './App.css'
import MovieCard from "./components/MovieCard"

function App() {

  return ( 
    <div>
      <MovieCard movie={{title: "The Godfather", release_date: "1972"}}/>
    </div>
  )
}

export default App
