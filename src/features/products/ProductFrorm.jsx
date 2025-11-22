
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { createProducts, updateProducts } from "./productSlice";


const ProductForm = ({productToEdit={},isEdit=false}) => {
    console.log(productToEdit)
 const dispatch =useDispatch();

 const  [product, setProduct]= useState( { 
    title: "",
    price: "",
    description: "",
    category: "",
    })

 const handleChange =(e)=>{
    setProduct({...product, [e.target.name]: e.target.value})
 }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isEdit){
        dispatch(updateProducts({id: productToEdit.id, product:product}))
        isEdit(false)
    }
    else{
           dispatch(createProducts({...product, id: nanoid()}))
    }
    setProduct({
         
    title: "",
    price: "",
    description: "",
    category: "",
    
    })   
  };
useEffect(() => {
  if (productToEdit) {
    setProduct({
      title: productToEdit.title ,
      description: productToEdit.description ,
      price: productToEdit.price,
      category: productToEdit.category,
    });
  }
}, [productToEdit]);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center"> {isEdit ? "Update Product" : "Add Product"}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <Input
            name="title"
            type="text"
            value={product.title}
            placeholder="Enter product title"
            onChange={handleChange}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <Textarea
            name="description"
            value={product.description}
            placeholder="Enter product description"
            onChange={handleChange}
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium">Category</label>
            <Input
           name="category"
            type="text"
             value={product.category}
            placeholder="Enter category"
            onChange={handleChange}
          />
        </div>
        
        {/* Price */}
        <div>
          <label className="block mb-1 font-medium">Price ($)</label>
          <Input
            type="number"
            placeholder="Enter price"
            name="price"
             value={product.price}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <div className="text-center mt-4">
          <Button type="submit" className="w-full">
           {isEdit ? "Update Product" : "Add Product"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
