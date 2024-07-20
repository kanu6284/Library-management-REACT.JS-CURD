import React,{useState} from 'react';
import axios from 'axios';
import BackButton from '../component/BackButton';
import spinner from '../component/spinner';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const {enqueueSnackbar} = useSnackbar('/');
  const handleDeleteBook = () =>{
    setLoading(true);
    axios.delete(`http://localhost:5556/books/${id}`)
    .then(() => {
      setLoading(false);
      enqueueSnackbar('book delete succesfully',{variant: 'success'})
      navigate('/');
    })
    .catch((error)=>{
      setLoading(false);
      enqueueSnackbar('error',{variant: 'error'})
      alert("an error is happende plz chcek")
      console.log(error)
    });
  };
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <spinner /> : ''}
      <div className='flex flex-col item-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are you suru you want to delete this book ?</h3>

        <button
        className='p-4 bg-red-500 text-white m-8 w-full'
        onClick={handleDeleteBook}>
          yes, delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteBook