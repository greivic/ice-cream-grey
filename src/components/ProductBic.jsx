import { useState, useEffect } from "react";

const ProductBic = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const [flavorName, setFlavorName] = useState("CHICKOO (Sapota)");

  const originalImages = [
    { src: "/public/assets/products/bic1.png", flavor: "CHICKOO (Sapota)" },
    { src: "/public/assets/products/bic2.png", flavor: "MANGO" },
    { src: "/public/assets/products/bic3.png", flavor: "STRAWBERRY" },
    { src: "/public/assets/products/bic2.png", flavor: "GRAPE" },
    { src: "/public/assets/products/bic1.png", flavor: "APPLE" },
    { src: "/public/assets/products/bic3.png", flavor: "ORANGE" },
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
    <div className="w-full mx-auto flex flex-col items-center">
      <div className="flex justify-between items-center w-full pr-5 pl-5">
        <button
          onClick={prevImage}
          className="input-background-color text-white w-8 h-8 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-black flex items-center justify-center"
        >
          &lt;
        </button>
        <div className="pt-7 pb-7 flex overflow-hidden w-[95%] justify-center items-center relative z-10">
          <div
            className="flex"
            style={{
              transform: `translateX(-${(currentImageIndex * 100) / images.length}%)`,
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={`Image ${index + 1}`}
                className={`transition-transform duration-300 ${index === currentImageIndex ? "scale-125" : "scale-90"}`}
                style={{
                  width: "300px",
                  height: "100px",
                  margin: index === currentImageIndex ? "0 30px" : "0 0px",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            ))}
          </div>
        </div>
        <button
          onClick={nextImage}
          className="input-background-color text-white w-8 h-8 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-black flex items-center justify-center"
        >
          &gt;
        </button>
      </div>
      <div className="justify-start w-full"> {/* Mantener alineación a la izquierda */}
        <div className="relative flex flex-col items-start mt-[-40px] z-0"> {/* Cambié items-center a items-start */}
          <div className="w-36 h-36 rounded-full bg-amber-200 flex items-center justify-center relative ml-40"> {/* Añadí margen de 24 */}
            <div className="text-lg text-black font-bold text-center">
              <span>{flavorName ? `${flavorName}` : ""}</span>
            </div>
            <button className="pt-20 absolute text-black w-8 h-8 flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"> {/* Cambié las propiedades para centrar el botón */}
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBic;
