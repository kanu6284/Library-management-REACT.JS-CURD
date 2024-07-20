import React, {useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../component/BackButton';
import spinner from '../component/spinner';

const ShowBook = () => {
  const [book, setBooks] = useState({});
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:5556/books/${id}`)
    .then((response)=>{
      setBooks(response.data);
      setLoading(false);
    })
    .catch((error)=>{
      console.log(error)
    });
  }, [])
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>ShowBook</h1>
      {loading ? (
        <spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl-w-fit p-4'>
        <div className='my-4'>
        <span className='text-xl-mr-4 text-gray-500'>Id</span>
        <span>{book._id}</span>
        </div>
        <div className='my-4'>
        <span className='text-xl-mr-4 text-gray-500'>title</span>
        <span>{book.title}</span>
        </div>
        <div className='my-4'>
        <span className='text-xl-mr-4 text-gray-500'>author</span>
        <span>{book.author}</span>
        </div>
        <div className='my-4'>
        <span className='text-xl-mr-4 text-gray-500'>punlishYear</span>
        <span>{book.publishYear}</span>
        </div>
        <div className='my-4'>
        <span className='text-xl-mr-4 text-gray-500'>Create-Time</span>
        <span>{new Date(book.createdAt).toString()}</span>
        </div>
        <div className='my-4'>
        <span className='text-xl-mr-4 text-gray-500'>Last-Upated-time</span>
        <span>{new Date(book.updatedAt).toString()}</span>

        </div>
        
        </div>

      )}
    </div>
  )
}

export default ShowBook