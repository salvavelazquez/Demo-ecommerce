'use client'
import { useAuth } from '@/context/AuthContext';
import { IOrder, Product } from '@/interfaces';
import { getOrders } from '@/mocks/orders.helper';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const OrdersView = () => {
  const router = useRouter();
  const { userData } = useAuth();
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null);

  const loadOrders = async () => {
    if (userData?.token) {
      const response: IOrder[] = await getOrders(userData?.token);
      setOrders(response);
    }
  };

  useEffect(() => {
    if (!userData?.token) {
      router.push("/");
    } else {
      loadOrders();
    }
  }, [userData?.token]);

  const handleViewDetails = (order: IOrder) => {
    setSelectedOrder(order); // Set selected order to show details
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-8 px-5">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-center mb-6">Tus órdenes</h1>
        
        {orders.length ? (
          orders.map((item: IOrder) => (
            <div key={item.id} className="border-b last:border-none py-4">
              <div className="flex justify-between items-center mb-2">
                <p className="text-lg font-medium text-gray-800">Status: <span className="font-semibold text-blue-500">{item.status.toLocaleUpperCase()}</span></p>
                <p className="text-sm text-gray-500">{new Date(item.date)?.toLocaleString()}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-md font-medium text-gray-700">Order ID: {item.id}</p>
                <button
                  onClick={() => handleViewDetails(item)} 
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Ver detalles
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-500 text-center">No tienes órdenes</div>
        )}
        
        {/* Detalles de la orden seleccionada */}
        {selectedOrder && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Detalles de la Orden {selectedOrder.id}</h2>
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-medium">Productos:</h3>
              <ul className="mt-4 space-y-4">
                {selectedOrder.products.map((product: Product) => (
                  <li key={product.id} className="flex justify-between items-center">
                    <div>
                      <p className="text-lg font-semibold text-gray-800">{product.name}</p>
                      <p className="text-sm text-gray-600">{product.description}</p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-sm font-medium text-gray-700">${product.price}</p>
                      <p className="ml-4 text-xs text-gray-500">Stock: {product.stock}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrdersView;
