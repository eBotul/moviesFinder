import React, {useState, createContext} from "react"

export const MoviesContext = createContext();

export const MoviesContextProvider = props =>{
    const [movies, setMovies] = useState([])
    const addMovies = movie =>{
        setMovies([...movies, movie])
    }

    return (
        <MoviesContext.Provider value={{movies, setMovies, addMovies}}>
            {props.children}
        </MoviesContext.Provider>
    )
}