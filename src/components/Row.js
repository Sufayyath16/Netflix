import React, { useEffect, useState } from 'react'
import instance from './Baseurl'
import './Row.css'


function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([])




  async function fetchData() {
    const result = await instance.get(fetchURL)
    console.log(result.data.results)

    setMovies(result.data.results)


  }
  useEffect(() => {
    fetchData()
  }, [])
  console.log(movies);
  const base_url = "https://image.tmdb.org/t/p/original/";
  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='movies'>
        {
          movies.map(movie => (
            <img className='movie' src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`}></img>
            ))
        }
      </div>


    </div>
  )
}

export default Row