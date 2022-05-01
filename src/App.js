import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./screens/Home"
import MovieDetail from './screens/Movie-detail'

function App() {
  return (
    <BrowserRouter> 

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movie-detail/:id" element={<MovieDetail />} />
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
