import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProducts, fetchProducts} from './productSlice';

const ProductListView = ({onHandleSetProductToEdit}) => {

    const {products, isLoading, error} =useSelector((state)=> state.productsR);

    const dispatch =useDispatch();
    useEffect(()=>{
   dispatch(fetchProducts())
    },[dispatch])
    const handleEdit=(product)=>{
       onHandleSetProductToEdit(product)

    }

    if(isLoading) return <p> Loading ...</p>
    if(error) return <p>{error}</p>
    return (
        <div className='max-w-7xl mx-auto'>
         <h1 className='text-5xl text-center mt-5 font-bold'> List of Product</h1>
         <div className='grid grid-cols-2 gap-6 mt-10'>
            {
                products.map((product)=> <div className='bg-slate-400 p-10 rounded-2xl shadow transition' key={product.id}>
                 <h3 className='text-2xl font-bold mb-5'>{product.title}</h3>
                 <p>{product.description}</p>
                 <p>Category: {product.category}</p>
                 <p>${product.price}</p>
                 <button onClick={() => dispatch(deleteProducts(product.id))} className='bg-red-600 px-2 p-1 mt-2 rounded-full text-white'>Delete</button>
                 <button onClick={()=>handleEdit(product)} className='bg-red-600 px-2 p-1 mt-2 rounded-full text-white ml-2'>Edit</button>
                </div>)
            }
         </div>
        </div>
    );
};

export default ProductListView;