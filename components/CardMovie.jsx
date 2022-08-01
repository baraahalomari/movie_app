import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';

const CardMovie = ({ movie }) => {

  const BASE_URL = 'https://image.tmdb.org/t/p/original/';

  return (
    <div className='group p-2 cursor-pointer transition duration-200 ease-in sm:hover:scale-105 hover:z-50'>
      <Image layout='responsive' height={1080} width={1920} src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}` || `${BASE_URL}${movie.poster_path}`} />
      <div className="p-2">
        <p className="truncate max-w-md">{movie.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{movie.title || movie.original_name}</h2>
        <p className='opacity-0 flex items-center group-hover:opacity-100'>{movie.release_date || movie.first_air_date} . {" "} <ThumbUpIcon className='h-5 mx-2' /> {movie.vote_average}
        </p>

      </div>
    </div>
  )
}

export default CardMovie