import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './routes/HomePage';
import UpdatePage from './routes/UpdatePage';
import MovieDetailPage from './routes/MovieDetailPage';
import { MoviesContextProvider } from './context/MoviesContext';

const App = () => {
  return (
    <MoviesContextProvider>
      <div className="container">
        <Router>  
            <Routes>
              <Route exact path ="/" element={<HomePage/>}/>
              <Route exact path ="/movies/:id/update" element={<UpdatePage/>}/>
              <Route exact path ="/movies/:id" element={<MovieDetailPage/>}/>
            </Routes>
      </Router> 
      </div>

    </MoviesContextProvider>
  )
}

export default App
