"use client"
import { useState } from "react";

const Carousel = () => {
    const images = [
        "https://ar.oneclickstore.com/wp-content/uploads/2021/01/MG143LE-A_01.jpg", // Reemplaza con las rutas de tus imágenes     
        "https://planetagames.com.ar/wp-content/uploads/2024/05/MACBOOK-AIR-M3-SPACE-GRAY-4.jpg",
        "https://comprarmag.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-24-at-10.17.02-AM-1030x1030.jpeg",
        "https://m.media-amazon.com/images/I/51l69jmcWcL.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg">
            {/* Images */}
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-96 h-64 object-cover mx-auto"
                    />
                ))}
            </div>

            {/* Previous Button */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600 focus:outline-none"
            >
                &#8592;
            </button>

            {/* Next Button */}
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600 focus:outline-none"
            >
                &#8594;
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 w-2 rounded-full ${
                            index === currentIndex
                                ? "bg-blue-500"
                                : "bg-gray-400"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
