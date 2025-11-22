
import { useState } from 'react'
import './App.css'
import ProductFrorm from './features/products/ProductFrorm'
import ProductListView from './features/products/ProductListView'


function App() {
  
const [isEdit,setIsEdit]= useState(false);
const [productToEdit,setProductToEdit]= useState("");
const onHandleSetProductToEdit=(product)=>{
  setProductToEdit(product);
  setIsEdit(true)
}
const resetForm = ()=>{
setProductToEdit(null);
setIsEdit(false)
}
return (
  
 
    <div className='max-w-7xl mx-auto'>
  <ProductListView onHandleSetProductToEdit={onHandleSetProductToEdit} />
  <ProductFrorm resetForm={resetForm} isEdit={isEdit} productToEdit={productToEdit}/>
   </div>
  
       
   
  )
}

export default App
