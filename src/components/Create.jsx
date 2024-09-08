import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
//import { Navigate, useNavigate } from 'react-router-dom';

const Create = () => {
const navigate = useNavigate();

  const[products, setproducts] = useContext(ProductContext)
  const [title, settitle] =  useState("");
  const [image, setimage] =  useState("");
  const [category, setcategory] =  useState("");
  const [price, setprice] =  useState("");
  const [description, setdescription] =  useState("");
  const AddProductHandler = (e) =>{
    e.preventDefault();

    
    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5 // Remove the extra comma here
     ) {
       alert('Each and every input must have at least 4 characters');
       return;
     }
 

    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    setproducts([...products, product]);
    localStorage.setItem(
      "products", 
    JSON.stringify([...products, product]));
    toast.success("Product Added Successfully")
    navigate("/")
    
  };
  return (
    <form onSubmit={AddProductHandler} className='p-[5%] w-screen h-screen flex flex-col items-center '>
        <h1 className='text-3xl w-1/2 mb-5'>Add New Product</h1>

        <input type="url" 
        placeholder='image link'
         className='text-2xl bg-zinc-300 rounded p-3 w-1/2 mb-3' 
        onChange={(e) => setimage(e.target.value)}
        value={image}
        />
        <input type="text" 
        placeholder='title'
         className='text-2xl bg-zinc-300 rounded p-3 w-1/2 mb-3' 
        onChange={(e) => settitle(e.target.value)}
        value={title}
        />
        <div className='w-1/2 flex justify-between'>
        <input type="text" 
        placeholder='category'
         className='text-2xl bg-zinc-300 rounded p-3 w-[48%] mb-3' 
        onChange={(e) => setcategory(e.target.value)}
        value={category}
        />
        <input type="number" 
        placeholder='price'
         className='text-2xl bg-zinc-300 rounded p-3 w-[48%] mb-3' 
        onChange={(e) => setprice(e.target.value)}
        value={price}
        />
        </div>
        <textarea className='text-2xl bg-zinc-300 rounded p-3 w-1/2 mb-3' 
        onChange={(e) => setdescription(e.target.value)} placeholder='Enter Product Description Here..'
        value={description}
         rows="5"></textarea>
         <div className='w-1/2'>
         <button className='py-2 px-5 border rounded border-blue-200 text-blue-300' href="/create">Add New Product</button>
         </div>
    </form>
  );
};

export default Create;
