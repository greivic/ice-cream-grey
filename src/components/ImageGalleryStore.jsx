import React, {useState} from 'react';

const ImageGallery = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        "/src/assets/gallery/img3.png",
        "/src/assets/gallery/img2.png",
        "/src/assets/gallery/img1.png"
    ];

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div
            className="absolute bottom-0 lg:right-20 md:right-1 sm:right-0 w-full md:w-[492px] lg:w-[605px] md:h-[260px] lg:h-[317px] bg-white shadow-lg z-20 overflow-hidden">
            <div className="relative w-full h-full">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{transform: `translateX(-${currentImageIndex * 100}%)`}}
                >
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            className="w-full h-full object-cover flex-shrink-0"
                        />
                    ))}
                </div>
                <button
                    onClick={prevImage}
                    className="text-black absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg transition duration-300 ease-in-out hover:bg-gray-300 flex items-center justify-center"
                >
                    ←
                </button>
                <button
                    onClick={nextImage}
                    className="text-black absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg transition duration-300 ease-in-out hover:bg-gray-300 flex items-center justify-center"
                >
                    →
                </button>
            </div>
        </div>
    );
};

export default ImageGallery;
