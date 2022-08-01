import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovies } from '../features/movies/movieSlice';
import AddMovie from './AddMovie';
import UsersCard from './UsersCard';

const UserMovies = () => {

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [updatedMove, setUpdatedMove] = useState(false);
  const { movies } = useSelector(state => state.movie);
  
  useEffect(() => {
    dispatch(getAllMovies())
  }, [])

  const handleOpen = () => {
    setUpdatedMove(false)
    setOpen(!open)
  }

  return (
    <div className="relative">
      {!movies ?
        <Box bg='gray.600' w='97%' p={4} color='white' ml={5} mr={5}>
          There is no movies
        </Box>
        :
        <>
        <button onClick={handleOpen} className="absolute top-0 right-0 mr-4 mb-4 w-40 bg-slate-600 p-1 rounded-md h-10 font-bold z-10">Add Movie</button>
          <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            {movies.map(movie => (
              <UsersCard key={movie.id} movie={movie} setUpdatedMove={setUpdatedMove} setOpen={setOpen}/>
            ))}
          </div>
        </>
      }
      <AddMovie open={open} updatedMove={updatedMove} setUpdatedMove={setUpdatedMove} setOpen={setOpen} />
    </div>
  )
}

export default UserMovies