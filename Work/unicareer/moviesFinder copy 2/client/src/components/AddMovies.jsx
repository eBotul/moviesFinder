import React, {useState, useContext} from 'react'
import MoviesFinder from "../apis/MoviesFinder"
import { MoviesContext } from '../context/MoviesContext';

const AddMovies = () => {
  const {addMovies} = useContext(MoviesContext)
  const [name, setName] = useState("")
  const [studio, setStudio] = useState("")
  const [ratings, setRatings] = useState("Ratings")

  const handleSubmit = async e =>{
    e.preventDefault()
    try {
      const response = await MoviesFinder.post("/", {
        name, 
        studio,
        ratings
      })
      addMovies(response.data.data[0])
    } catch (error) {
      
    }
  }
  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row d-flex">
            <div className="col">
                <input value ={name} onChange={(e=>{ setName(e.target.value)})} type="text"className="form-control" placeholder="name"/>
            </div>
            <div className="col">
                <input value ={studio} onChange={(e=>{ setStudio(e.target.value)})}  type="text" className="form-control" placeholder="studio"/>
            </div>
            <div className="col">
                <select value ={ratings} onChange={(e=>{ setRatings(e.target.value)})}  className="custom-select my-1 mr-sm-2">
                    <option disabled>Ratings</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>                
                </select>    
            </div>
            <button onClick={handleSubmit} type="submit" className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  )
}

export default AddMovies
