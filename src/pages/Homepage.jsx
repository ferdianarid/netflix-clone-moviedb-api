import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import Navbar from '../components/moleculs/Navbar'
import MovieCard from '../components/organism/MovieCard'
import { API_KEY, API_URL, ImagePath } from '../apis/apis'
import Heading from '../components/atoms/Heading'

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
                     <Helmet>
                            <meta charSet='utf-8' />
                            <title>Netflix Indonesia - Watch TV Shows Online, Watch Movies Online</title>
                            <link rel="icon" href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico" />
                            <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0" />
                            <meta content="watch movies, movies online, watch TV, TV online, TV shows online, watch TV shows, stream movies, stream tv, instant streaming, watch online, movies, watch movies Indonesia, watch TV online, no download, full length movies" name="keywords" />
                            <meta content="Watch Netflix movies &amp; TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more." name="description" />
                            <meta name="apple-touch-icon" content="https://assets.nflxext.com/en_us/layout/ecweb/netflix-app-icon_152.jpg" />
                            <meta property="og:description" content="Watch Netflix movies &amp; TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more." />
                     </Helmet>
                     {/* Headers */}
                     <div className="header px-5 md:px-[100px] py-5 md:py-10 relative w-full h-[650px]">
                            <Navbar />
                            {/* Heading */}
                            <div className="max-w-[700px] mx-auto pt-[120px] text-center bg-transparent">
                                   <Heading>Unlimited movies, TV shows, and more.</Heading>
                                   <h3 className="font-medium pt-2 leading-tight md:text-2xl text-white">Watch anywhere. Cancel anytime.</h3>
                                   <h3 className="font-normal pt-6 leading-tight text-sm md:text-md text-white">Ready to watch? Enter your email to create or restart your membership.</h3>
                                   {/* Search Input Fields and Button */}
                                   <div className="flex flex-col md:flex-row items-center mt-4 justify-center">
                                          <input type="email" name="email" id="email" className='w-full md:w-[500px] py-3 md:py-[15.5px] px-4' placeholder='Email address' />
                                          <input className='text-md md:text-xl bg-[#E30813] text-white rounded-sm md:rounded-none font-normal md:font-medium py-2 mt-4 md:mt-0 md:py-3 px-4' type="submit" value="Get Started" />
                                   </div>
                            </div>
                     </div>
                     {/* Movies List */}
                     <div className="mx-4 mb-[100px] md:mx-[100px] mt-[100px]">
                            <h1 className="font-bold text-2xl text-white mt-5">Popular Movies</h1>
                            <h4 className="font-normal text-sm text-white mt-2 mb-5">Popular and trending international movie list on this week</h4>
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