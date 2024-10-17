import React, { useState, useEffect } from "react";

const ProductIc = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(2); // Segunda imagen como seleccionada por defecto
  const [flavorName, setFlavorName] = useState("CHICKOO (Sapota)");

  const originalImages = [
    { src: "/src/assets/products/ic2.png", flavor: "CHICKOO (Sapota)" },
    { src: "/src/assets/products/ic3.png", flavor: "CHICKOO (Sapota)" },
    { src: "/src/assets/products/ic4.png", flavor: "CHICKOO (STRAWBERRY)" },
    { src: "/src/assets/products/ic1.png", flavor: "STRAWBERRY (ORANGE)" },
    { src: "/src/assets/products/ic3.png", flavor: "CHICKOO (Sapota)" },
    { src: "/src/assets/products/ic4.png", flavor: "CHICKOO (Sapota)" },
  ];

  const images = [
    originalImages[originalImages.length - 1],
    ...originalImages,
    originalImages[0],
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === 0) return images.length - 2;
      return (prevIndex - 1 + images.length) % images.length;
    });
  };

  useEffect(() => {
    if (currentImageIndex > 0 && currentImageIndex < images.length - 1) {
      setFlavorName(images[currentImageIndex].flavor);
    } else {
      setFlavorName("");
    }
  }, [currentImageIndex, images]);

  useEffect(() => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(images.length - 2);
    } else if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex(1);
    }
  }, [currentImageIndex, images.length]);

  return (
      <div className="w-full mx-auto flex flex-col items-center relative pt-10 mt-7 overflow-hidden">
          {/* Primeras imágenes de fondo */}
          <div className="absolute bg-center bg-no-repeat"
               style={{
                   backgroundImage: 'url(/src/assets/img-presentation-bg.png)',
                   width: "690px",
                   height: "220px",
                   backgroundSize: "contain",
                   top: "10%",
                   left: "50%",
                   transform: "translate(-50%, 0)",
                   opacity: 0.5,
                   zIndex: "-1",
               }}
          ></div>

          <div className="absolute bg-center bg-no-repeat pr-5"
               style={{
                   backgroundImage: 'url(/src/assets/img-presentation-bg2.png)',
                   width: "600px",
                   height: "290px",
                   backgroundSize: "contain",
                   top: "40%",
                   left: "48%",
                   transform: "translate(-50%, 0)",
                   opacity: 0.9,
                   zIndex: "-1",
               }}
          ></div>

          {/*<div className="flex justify-between items-center w-full px-5 pt-1 pl-40 pr-40 ml-20 ">*/}
          <div className="flex justify-between items-center w-full px-5
                md:pl-0 md:pr-0 md:ml-0
                lg:pl-40 lg:pr-40 lg:ml-16">

              <div
                  className="pt-7 pb-10 flex w-full md:w-[95%] justify-center items-center relative z-10 overflow-hidden">
                  <div
                      className="flex"
                      style={{
                          transform: `translateX(-${(currentImageIndex - 1) * 300}px)`, // Ajusta la posición para que la imagen activa esté centrada
                          transition: "transform 0.3s ease-in-out",
                      }}
                  >
                      {images.map((image, index) => {
                          const isSelected = index === currentImageIndex;
                          return (
                              <img
                                  key={index}
                                  src={image.src}
                                  alt={`Image ${index + 1}`}
                                  className={`transition-transform duration-300 ${isSelected ? "scale-110" : "scale-50"} ${isSelected ? "z-20" : "z-10"}`}
                                  style={{
                                      maxWidth: "100%", // Asegura que la imagen no desborde
                                      width: "300px", // Tamaño base
                                      height: "300px",
                                      transition: "transform 0.3s ease-in-out",
                                      transformOrigin: "center", // Mantén el origen de transformación consistente
                                  }}
                              />
                          );
                      })}
                  </div>
              </div>
          </div>

          {/* Botones en línea */}
          <div className="flex justify-center space-x-10 mt-4 mb-5 mr-10">
              <button
                  onClick={prevImage}
                  className="input-background-color mr-20 text-white w-8 h-8 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-gray-800 flex items-center justify-center"
              >
                  &lt;
              </button>
              <button
                  onClick={nextImage}
                  className="input-background-color text-white w-8 h-8 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-gray-800 flex items-center justify-center"
              >
                  &gt;
              </button>
          </div>
      </div>
  );
};

export default ProductIc;