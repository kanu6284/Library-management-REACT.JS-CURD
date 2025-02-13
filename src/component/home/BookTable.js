import React from 'react'
import { Link } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';

const BookTable = ({books}) => {
  return (
    <table className='w-full border-spearate border-spacing-2'>
    <thead>
      <tr>
        <th className='border border-slate-600 rounded-md'>No</th>
        <th className='border border-slate-600 rounded-md'>title</th>
        <th className='border border-slate-600 rounded-md max-md:hidden'>author</th>
        <th className='border border-slate-600 rounded-md max-md:hidden'>punlishYear</th>
        <th className='border border-slate-600 rounded-md'>operations</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book, index) => (
        <tr key={book._id} className='h-8'>
          <td className='border border-slate-700 rounded-md text-center'>
            {index + 1}
          </td>
          <td className='border border-slate-700 rounded-md text-center'>
            {book.title}
          </td>
          <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
            {book.author}
          </td>
          <td className='border border-slate-700 rounded-md text-center'>
            {book.publishYear}
          </td>
          <td className='border border-slate-700 rounded-md text-center'>
            <div className='flex justify-center gap-x-4'>
              <Link to={`/books/details/${book._id}`}>
                <BsInfoCircle className='text-2xl text-green-800' />
              </Link>
              <Link to={`/books/edit/${book._id}`}>
                <AiOutlineEdit className='text-2xl text-yellow-600' />
              </Link>
              <Link to={`/books/delete/${book._id}`}>
                <MdOutlineDelete className='text-2xl test-red-600' />
              </Link>
            </div>
          </td>
        </tr>
      ))}

    </tbody>
  </table>
  )
}

export default BookTable