'use client';

import Link from 'next/link';
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const ProfileView = () => {
  const { userData, setUserData } = useAuth(); // Obtener los datos del usuario desde el contexto
  const router = useRouter(); // Usar el hook para la navegación

  const handleLogout = () => {
    setUserData(null); // Limpiar los datos de la sesión
    localStorage.removeItem('userSession'); // Eliminar los datos del localStorage
    router.push('/login'); // Redirigir a la página de login
  };

  if (!userData) {
    return <div className="text-center text-lg text-gray-500">Cargando...</div>; // Mostrar mensaje de carga si no hay datos del usuario aún
  }

  const { email, address, phone, name } = userData.user; // Desestructurar la información del usuario

  return (
    <div className=" bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl p-8 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-center text-gray-800 ">Mi Perfil</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 gray-700 py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
          >
            Cerrar sesión
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between">
            <h4 className="text-lg font-medium text-gray-700">Nombre y Apellido:</h4>
            <p className="text-lg text-gray-500">{name}</p>
          </div>

          <div className="flex justify-between">
            <h4 className="text-lg font-medium text-gray-700">Correo electrónico:</h4>
            <p className="text-lg text-gray-500">{email}</p>
          </div>

          <div className="flex justify-between">
            <h4 className="text-lg font-medium text-gray-700">Dirección:</h4>
            <p className="text-lg text-gray-500">{address}</p>
          </div>

          <div className="flex justify-between">
            <h4 className="text-lg font-medium text-gray-700">Número de teléfono:</h4>
            <p className="text-lg text-gray-500">{phone}</p>
          </div>
        </div>

        <div className="mt-6">
          <Link href="/dashboard/orders">
            <button className="w-full bg-indigo-600 gray-700 py-3 rounded-xl border-2 border-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200">
              Ver mis órdenes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileView;
