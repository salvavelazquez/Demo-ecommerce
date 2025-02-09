import React from "react";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 ">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Quiénes Somos</h2>
        
        <div className="space-y-6 text-gray-600">
          <p>
            Somos una empresa comprometida con ofrecer productos y servicios de la mejor calidad. Nuestra misión es 
            satisfacer las necesidades de nuestros clientes con soluciones innovadoras y efectivas.
          </p>
          <p>
            Con años de experiencia en el sector, hemos construido una comunidad de clientes satisfechos que confían en 
            nuestra dedicación y profesionalismo. Nuestra visión es seguir creciendo y mejorando para brindar un impacto 
            positivo en la sociedad.
          </p>
          <p>
            Nuestro equipo está formado por profesionales apasionados que trabajan día a día para garantizar el mejor 
            servicio posible. Creemos en la transparencia, la innovación y la excelencia en todo lo que hacemos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;