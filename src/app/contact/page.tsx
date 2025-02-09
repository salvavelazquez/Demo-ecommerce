import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Contáctanos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Información de la empresa */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Nuestra Información</h3>
            <p className="mt-2 text-gray-600">Estamos aquí para ayudarte. Contáctanos a través de los siguientes medios:</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li><strong>📍 Dirección:</strong> 123 Calle Principal, Ciudad, País</li>
              <li><strong>📞 Teléfono:</strong> +123 456 7890</li>
              <li><strong>📧 Email:</strong> contacto@empresa.com</li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-700">Facebook</a>
              <a href="#" className="text-blue-500 hover:text-blue-700">Twitter</a>
              <a href="#" className="text-blue-500 hover:text-blue-700">Instagram</a>
            </div>
          </div>
          
          {/* Formulario de contacto */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Envíanos un mensaje</h3>
            <form className="mt-4 space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Correo Electrónico"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                placeholder="Tu mensaje"
                
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;