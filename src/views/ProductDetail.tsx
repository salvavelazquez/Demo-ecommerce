'use client'
import { useAuth } from '@/context/AuthContext';
import { Product } from '@/interfaces'  
import React from 'react'  

const ProductDetail: React.FC<Product> = ({ name, image, description, stock, price, id, categoryId }) => {  
  const{userData} = useAuth();
  const handleAddToCart = () => {
      if(!userData?.token){
        alert("Tienes que estar logueado para agregar productos")
      } else {
        const cart:  Product[] = JSON.parse(localStorage.getItem("cart") || "[]")
        const productExist = cart.some((item: Product) => {
          if(item.id === id) return true;
          return false
        })

        if(productExist) {
          alert("Este producto ya está en tu carrito")
        } else {
          cart.push({
            name, image, id, description, stock, price, categoryId
          })
          localStorage.setItem("cart", JSON.stringify(cart))
          alert("Se agrego el producto a tu carrito")
        }
      }
  }
  return (  
    <div className="flex p-6 bg-white shadow-lg rounded-lg">  
      <div className="flex-shrink-0 w-1/3">  
        <img src={image} alt={`${name} - product image`} className="w-full h-auto object-cover rounded-lg" />  
      </div>  
      <div className="ml-6 w-2/3">  
        <h2 className="text-2xl font-bold">{name}</h2>  
        <p className="mt-2 text-gray-600">{description}</p>  
        <p className="mt-4 text-lg font-semibold">Stock: {stock}</p>  
        <p className="mt-2 text-xl font-bold">${price}</p>  
        <p className="mt-4 text-gray-500">Envios a todo el Pais</p>  
        <div className="flex items-center mt-4">  
          <label className="mr-2">Cantidad:</label>  
          <input type="number" min="1" defaultValue="1" className="border rounded px-2 py-1 w-16" />  
        </div>  
        <button onClick={handleAddToCart} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">  
          Agregar al Carrito  
        </button>  
      </div>  
    </div>  
  )  
}  

export default ProductDetail