import React, { useState, useEffect } from 'react'
import MovieCard from '../components/organism/MovieCard'
import { API_KEY, API_URL, ImagePath } from '../apis/apis'

const Homepage = () => {
       const MoviesAPI = `${API_URL + API_KEY}`

       const [movies, setMovies] = useState([])
       const [loadMore, setLoadMore] = useState(MoviesAPI)

       const FetchMovies = async () => {
              const response = await fetch(loadMore)
              const data = await response.json()

              setMovies(data.results)
              console.log(data)
       }

       useEffect(() => {
              FetchMovies()
       }, [])

       return (
              <React.Fragment>
                     <div className="mx-4 md:mx-[100px]">
                            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-4">
                                   {
                                          movies.map((movieItems) => (
                                                 <MovieCard
                                                        key={movieItems.id}
                                                        movieId={movieItems.id}
                                                        movieTitle={movieItems.title}
                                                        popularity={Math.floor(movieItems.popularity)}
                                                        releaseDate={movieItems.release_date}
                                                        votesAverage={movieItems.vote_average}
                                                        altImage={movieItems.title}
                                                        coverImage={`${ImagePath + movieItems.backdrop_path}`}
                                                 />
                                          ))
                                   }
                            </div>
                     </div>
              </React.Fragment>
       )
}

export default Homepage