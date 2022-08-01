import { useEffect, useState } from 'react';
import CardMovie from './CardMovie';
import { Box } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

const MoviesCol = ({ result }) => {



  return (
    <>
      {!result ?
        <Box bg='gray.600' w='97%' p={4} color='white' ml={5} mr={5}>
          There is no movies
        </Box>
        :
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
          {result.map(movie => (
            <CardMovie key={movie.id} movie={movie} />
          ))}
        </div>
      }
    </>
  )
}

export default MoviesCol