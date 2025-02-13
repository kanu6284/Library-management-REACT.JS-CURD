import React from 'react'
import { Link } from 'react-router-dom';
import {PiBookOpenTextLight} from 'react-icons/pi';
import {BiUserCircle, BiShow} from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModel from './BookModle';
const BookSingleCard = ({book}) => {
  const [showModle, setShowModle] = useState(false);
  return (
    
            <div key={book._id} className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
            <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'></h2>
            <div className='flex justify-start item-center gap-x-2'>
                <PiBookOpenTextLight className='text-red-300 text-2xl' />
                <h2 className='my-1'>{book.title}</h2>
            </div>
            <div className='flex justify-start item-center gap-x-2'>
              <BiUserCircle className='text-red-300 text-2xl' />
              <h2 className='my-1'>{book.author}</h2>
              </div>

              <div className='flex justify-between item-center gap-x-2 mt-4 p-4'>
              <BiShow className='text-3xl text-blue-800 hover:text-black cursor-pointer'
              onClick={()=> setShowModle(true)}
               />
              <Link to={`/books/details/${book._id}`}>
                <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
              </Link>
              <Link to={`/books/edit/${book._id}`}>
                <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
              </Link>
              <Link to={`/books/delete/${book._id}`}>
                <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
              </Link>
            </div>
            {
              showModle && (
                <BookModel book={book} onClose={()=> setShowModle(false)} />
              )
            }
           </div>
        )}

export default BookSingleCard