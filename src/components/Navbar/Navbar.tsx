'use client'
import Link from "next/link";
import Image from 'next/image'
import React from "react";
import logo from "../../assets/Logo.png";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
    const {userData} = useAuth();

    return (
        <nav className="w-full bg-white shadow-md mb-4">
            <div className="container mx-auto px-4 py-2">
                {/* Segunda fila: Barra de búsqueda y acciones del usuario */}
                <div className="flex items-center justify-between mt-2">
                <div className="flex items-center">
                        <Link href="/">
                            <Image src={logo} alt="Logo" className="h-14 w-auto" />
                        </Link>
                    </div>

                    {/* Barra de búsqueda */}
                    <div className="relative flex-grow mx-4 hidden md:flex">
                        <input
                            type="text"
                            placeholder="Buscar productos"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div>

                    {
                        userData && userData?.token ? (
                            
                            <div className="flex items-center space-x-4">
                                <Link
                                    href="/dashboard"
                                    className="hidden md:block text-sm font-medium text-gray-700 hover:text-blue-600"
                                >
                                    PERFIL
                                </Link>
                                <Link href="/cart">
                                <div className="relative">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="h-6 w-6 text-gray-700 hover:text-blue-600"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 6.75M17 13l1.35 6.75M9 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm6 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                                        />
                                    </svg>
                                </div>
                            </Link>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4">
                            <Link
                                href="/login"
                                className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-blue-700 transition"
                            >
                                Ingresar
                            </Link>
                            <Link
                                href="/register"
                                className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-blue-700 transition"
                            >
                                Registrarse
                            </Link>
                            <Link href="/cart">
                                <div className="relative">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="h-6 w-6 text-gray-700 hover:text-blue-600"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 6.75M17 13l1.35 6.75M9 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm6 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                                        />
                                    </svg>
                                </div>
                            </Link>
                        </div>

                        )
                    }

                </div>

                {/* Tercera fila: Links de navegación */}
                <div className="bg-gray-100 py-2 mt-2">
                    <div className="container mx-auto flex items-center justify-center space-x-8 text-sm font-medium text-gray-700">
                        <Link href="/allProducts" className="hover:text-blue-600">
                            PRODUCTOS
                        </Link>
                        <Link href="/aboutUs" className="hover:text-blue-600">
                            QUIENES SOMOS
                        </Link>
                        <Link href="/contact" className="hover:text-blue-600">
                            CONTACTO
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;