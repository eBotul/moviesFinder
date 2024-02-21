import React, {useEffect, useContext} from 'react'
import MoviesFinder from '../apis/MoviesFinder'
import {MoviesContext} from '../context/MoviesContext'

const MovieList = (props) => {
    const {movies, setMovies} = useContext(MoviesContext)
    useEffect(()=>{
      const fetchData = async () => {
        try {
          const response = await MoviesFinder.get('/')
          setMovies(response.data.data)
        } catch (error) {
          console.log(error)
        }
      }
      fetchData()
    },[])


  return (
    <div className='list-group'>
      <table className="table table-hover">
        <thead className="table-info">
            <tr className="bg-primary">
                <th scope='col'>Movie Name</th>
                <th scope='col'>Studio</th>
                <th scope='col'>Ratings</th>
                <th scope='col'>Edit</th>
                <th scope='col'>Delete</th>
            </tr>
        </thead>
        <tbody className="table-success">
        {movies && movies.map(movie=>{
          return (
            <tr key={movie.id}>  
              <td>{movie.name}</td>
              <td>{movie.studio}</td>
              <td>{movie.ratings}</td>
              <td><button className="btn btn-warning">Update</button></td>
              <td><button className="btn btn-danger">Delete</button></td>
            </tr>
          )
        })}
            {/* <tr>
                <td>ANT MAN</td>
                <td>dc</td>
                <td>3</td>
                <td><button className="btn btn-warning">Update</button></td>
                <td><button className="btn btn-danger">Delete</button></td>
            </tr> */}
        </tbody>
      </table>
    </div>
  )
}

export default MovieList
