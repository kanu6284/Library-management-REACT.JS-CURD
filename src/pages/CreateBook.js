import React,{useState} from 'react'
import BackButton from '../component/BackButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBook = () => {
     const [title, setTitle] = useState('');
     const [author, setAuthor] = useState('');
     const [publishYear, setPublishYear] = useState('');
     const [loading, setLoading] = useState('');
     const navigate = useNavigate('/');
     const {enqueueSnackbar} = useSnackbar();
     const handleSaveBook = () =>{
      const data = {
        title,
        author,
        publishYear,
      };
      setLoading(true);
      axios.post('http://localhost:5556/books', data)
      .then(()=>{
        setLoading(false);
        enqueueSnackbar('book created succesfully', {variant: 'success'})
        navigate("/");
      })
      .catch((error)=>{
        setLoading(false);
        enqueueSnackbar('error', {variant: 'error'})
        console.log("an error is happend plz check the consol")
        console.log(error);
      });
     };
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading ? <spinner /> : '' }
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>title</label>
          <input
          type='text'
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full' />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>author</label>
          <input
          type='text'
          value={author}
          onChange={(e)=> setAuthor(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full' />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>publishYear</label>
          <input
          type='number'
          value={publishYear}
          onChange={(e)=> setPublishYear(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full' />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
        save
        </button>
      </div>
    </div>
  )
}

export default CreateBook