import React from "react";
import Image from 'next/image'
import logo from "../../assets/Logo.png";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
                {/* Logo */}
                <div className="flex-1 text-center mb-4">
                    <Image src={logo} alt="Logo" className="w-24 mx-auto" />
                </div>

                {/* Atención al Cliente */}
                <div className="flex-1 text-center mb-4 text-sm">
                    <p className="font-bold">Atención al Cliente:</p>
                    <p>
                        0800 122 0338 <br />
                        0810 999 3738
                    </p>
                </div>

                {/* Horarios */}
                <div className="flex-1 text-center mb-4 text-sm">
                    <p className="font-bold">Lun-Vie: 09:00 a 18:00</p>
                    <p></p>
                    <p className="font-bold">Sáb: 09:00 a 12:00</p>
                    <p></p>
                    <p>sv-company@gmail.com</p>
                </div>

                {/* Sucursales */}
                <div className="flex-1 text-center mb-4 text-sm">
                    <p className="font-bold">Sucursales</p>
                    <p>Encuentra tu tienda cercana</p>
                </div>

                {/* Trabaja con Nosotros */}
                <div className="flex-1 text-center mb-4 text-sm">
                    <p>
                        <Link
                            href="#"
                            className="text-white hover:underline"
                        >
                            TRABAJA CON NOSOTROS
                        </Link>
                    </p>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-xs mt-6 pt-4 border-t border-gray-700">
                © 2000 - 2024 SV Company - Av Dogma Punta alto 7 - Jujuy
            </div>
        </footer>
    );
};

export default Footer;
