import { ThumbUpIcon } from '@heroicons/react/outline';
import { TrashIcon, CogIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import { removeMovie } from '../features/movies/movieSlice';
import getUser from '../utils/getUser';

const UsersCard = ({ movie,setUpdatedMove ,setOpen}) => {
  const dispatch = useDispatch();
  const {user} = getUser();

  const handleUpdate = () => {
    setOpen(true);
    setUpdatedMove(movie);
  }

  
  return (
    <div className='group p-2 cursor-pointer transition duration-200 ease-in sm:hover:scale-105 hover:z-50'>
      { user?.id  &&
      <TrashIcon className='hidden group-hover:flex h-8 mb-1 top-5 right-5 absolute' onClick={()=>dispatch(removeMovie(movie.id))} />}
      <img src={movie.image} />
      <div className="p-2">
        <p className="truncate max-w-md">{movie.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{movie.title || movie.original_name}</h2>
        <p className='opacity-0 flex items-center group-hover:opacity-100'>{movie.release_date || movie.first_air_date} . {" "} <ThumbUpIcon className='h-5 mx-2' /> {movie.vote_average}
        </p>
      </div>
      <CogIcon className='hidden group-hover:flex h-8 mb-1 absolute right-5' onClick={handleUpdate} />
    </div>
  )
}

export default UsersCard