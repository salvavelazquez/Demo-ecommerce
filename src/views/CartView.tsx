'use client'

import { useAuth } from '@/context/AuthContext'
import { Product } from '@/interfaces';
import { createOrder } from '@/mocks/orders.helper';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const CartView = () => {
  const { userData } = useAuth();
  const [cart, setCart] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);

  const router = useRouter();
  
  useEffect(() => {
    if (!userData) router.push("/login");
  }, []);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (storedCart) {
      let totalCard = 0;
      storedCart.forEach((item: Product) => {
        totalCard = totalCard + item.price;
      });
      setTotal(totalCard);
      setCart(storedCart);
    }
  }, []);

  const handleCheckout = async () => {
    const idProducts = cart?.map((product) => product.id);
    if (userData?.token) {
      await createOrder(idProducts, userData?.token);
      setCart([]);
      setTotal(0);
      localStorage.setItem("cart", "[]");
    }
  }

  return (
    <div className="flex justify-center items-center  bg-gray-50 py-8 px-5">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-center mb-6">Tu carrito de compras</h1>
        
        <div className="mb-6">
          <h2 className="text-xl font-medium text-gray-800">Productos:</h2>
          {cart.length ? (
            cart.map((item: Product) => (
              <div key={item.id} className="flex justify-between items-center py-2 border-b">
                <p className="text-gray-700">{item.name}</p>
                <p className="text-gray-700">${item.price}</p>
              </div>
            ))
          ) : (
            <div className="text-gray-500">No tienes productos en tu carrito</div>
          )}
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-lg font-medium text-gray-700">Total: ${total}</p>
          <button
            onClick={handleCheckout}
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-300"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartView;
