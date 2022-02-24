import React from 'react'
import { CalendarIcon } from "@heroicons/react/solid"
import { StarIcon } from "@heroicons/react/solid"

const MovieCard = ({ movieId, coverImage, movieTitle, votesAverage, popularity, releaseDate, altImage }) => {
       return (
              <React.Fragment>
                     <div className="max-w-[250px]  text-white rounded-md bg-[#232033] p-3">
                            <div className="relative bg-[#232033]">
                                   <h3 className="text-gray-900 text-[8px] font-bold bg-yellow-300 absolute z-10 top-2 left-2 px-1 py-[1px] rounded-sm">{movieId}</h3>
                                   <img className='h-[180px] transition-all object-cover w-full rounded-md' src={coverImage} alt={altImage} />
                            </div>
                            <div className="m-2 bg-[#232033]">
                                   <p className="text-[10px] font-medium bg-[#232033] mb-4 mt-4 flex items-center"><span className='bg-yellow-300 flex items-center w-fit rounded-md p-[3px] gap-x-1 font-bold mr-2 pr-1 text-gray-800'><StarIcon className='w-3 h-3 text-gray-900 bg-yellow-300' />{votesAverage}</span>Vote average</p>
                                   <h1 className="font-bold text-xl leading-6 bg-[#232033]">{movieTitle}</h1>
                                   <div className="flex items-center justify-between bg-[#232033] mt-4">
                                          <div className="flex items-center gap-x-2 bg-[#232033]">
                                                 <StarIcon className='hidden md:block w-4 h-4 text-white bg-[#232033]' />
                                                 <h4 className="font-normal text-[10px] bg-[#232033]"><span className='text-yellow-300 text-[10px] md:text-xs bg-[#232033] font-bold'>{popularity}</span><br />Popularity</h4>
                                          </div>
                                          <div className="flex items-center  gap-x-2 bg-[#232033]">
                                                 <CalendarIcon className='hidden md:block w-4 h-4 text-white bg-[#232033]' />
                                                 <h4 className="font-normal text-[10px] bg-[#232033]"><span className='text-yellow-300 text-xs bg-[#232033] font-bold'>{releaseDate}</span><br />Release Date</h4>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </React.Fragment>
       )
}

export default MovieCard