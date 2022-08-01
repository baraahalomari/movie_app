import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addMovie, updateMovie } from '../features/movies/movieSlice';
import {XIcon} from '@heroicons/react/outline';

const AddMovie = ({open ,updatedMove ,setUpdatedMove , setOpen}) => {
  const dispatch = useDispatch();
  const [movie, setMovie] = useState({title: '', description: '', image: '', date: '', rating: 0})

  const handleChange = (e) => {
    setMovie({...movie, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    if (updatedMove)  setMovie(updatedMove)
  }, [updatedMove])
  

  const handleSubmit = (e) => {
    e.preventDefault()
    updatedMove ? dispatch(updateMovie(movie)) : dispatch(addMovie(movie))
    setOpen(false)
    setMovie({title: '', description: '', image: '', date: '', rating: 0})
  }

  const handleClose = () => {
    setOpen(false)
    setUpdatedMove(false)
    setMovie({title: '', description: '', image: '', date: '', rating: 0})
  }
  
  return (
    open && (
    <div  className=' flex flex-col absolute px-2 py-5  justify-center items-center inset-y-1/2 inset-x-1/2  '>
      <h1 className='tracking-widest whitespace-nowrap text-2xl font-bold mt-5 px-2 py-5'>Add Movie</h1>
      <form className="bg-slate-600 p-5 rounded-md"  onSubmit={handleSubmit}>
      <XIcon className='relative flex top-0 right-0 w-12 h-10' onClick={handleClose} />
        <label className="text-xl py-2">
          Title:
          <input type="text" name="title" onChange={handleChange} value={movie.title} required
          className="flex px-3 mt-1 py-2 text-black bg-white border border-slate-300 rounded-md  text-sm shadow-sm placeholder-slate-400 focus:outline-none  focus:ring-1 "
          />
        </label>
        <label className="text-xl py-2">
          Rating:
          <input type="number" name="rating" onChange={handleChange} value={movie.rating} required
          className="flex px-3 mt-1 py-2 text-black bg-white border border-slate-300 rounded-md  text-sm shadow-sm placeholder-slate-400 focus:outline-none  focus:ring-1 "
          />
        </label >
       
        <label className="text-xl py-2">
        Description:
          <input type="text" name="description"  onChange={handleChange} value={movie.description} required
          className="flex px-3 mt-1 py-2 text-black bg-white border border-slate-300 rounded-md  text-sm shadow-sm placeholder-slate-400 focus:outline-none  focus:ring-1 "
          />
        </label>
        <label className="text-xl py-2">
          Poster:
          <input onChange={handleChange} value={movie.image} type="text" name="image" required className="flex px-3 mt-1 py-2 text-black bg-white border border-slate-300 rounded-md  text-sm shadow-sm placeholder-slate-400 focus:outline-none  focus:ring-1 " />
        </label>
      
        <label className="text-xl py-2">
          Year:
          <input type="date" name="date" onChange={handleChange} value={movie.date} required
          className="flex px-3 mt-1 py-2 text-black bg-white border border-slate-300 rounded-md  text-sm shadow-sm placeholder-slate-400 focus:outline-none  focus:ring-1 "
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
    )
  )

}

export default AddMovie