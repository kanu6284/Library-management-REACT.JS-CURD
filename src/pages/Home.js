import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../component/spinner';
import { Link } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';
import BookTable from '../component/home/BookTable';
import BookCard from '../component/home/BookCard';


const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  
  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5556/books')
      .then((response) => {
        console.log("Books data:", response.data.data);  
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error occurred:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
    <img src='https://img.freepik.com/premium-photo/opened-book-with-flying-pages-butterflies-dark-backgroundgenerative-ai_391052-12859.jpg' />
    <div className='flex justify-center item-center gap-x-4'>
    <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
    onClick={()=> setShowType('table')}>
    table
   </button>
   <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
    onClick={()=> setShowType('card')}>
    card
   </button>
    </div>
      <div className='flex-justify-between item-center'>
        <h1 className='text-3xl my-8'>Book List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
         <BookTable books={books}/>
         ) : ( 
          <BookCard books={books} />
      )}
    </div>
  )
}

export default Home