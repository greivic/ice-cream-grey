import {useState, useEffect} from "react";

const ProductRic = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(2); // Segunda imagen como seleccionada por defecto
    const [flavorName, setFlavorName] = useState("CHICKOO (Sapota)");

    const originalImages = [
        {src: "/public/assets/products/ric.png", flavor: "CHICKOO (Sapota)"},
        {src: "/public/assets/products/ric.png", flavor: "CHICKOO (Sapota)"},
        {src: "/public/assets/products/ric.png", flavor: "CHICKOO (STRAWBERRY)"},
        {src: "/public/assets/products/ric.png", flavor: "STRAWBERRY (ORANGE)"},
        {src: "/public/assets/products/ric.png", flavor: "APPLE (Sapota)"},
        {src: "/public/assets/products/ric.png", flavor: "ORANGE (APPLE)"},
        {src: "/public/assets/products/ric.png", flavor: "ORANGE (APPLE)"},
        {src: "/public/assets/products/ric.png", flavor: "ORANGE (APPLE)"},
        {src: "/public/assets/products/ric.png", flavor: "ORANGE (APPLE)"},
        {src: "/public/assets/products/ric.png", flavor: "ORANGE (APPLE)"},
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
            <div className="flex justify-between items-center w-full px-5">
                <button
                    onClick={prevImage}
                    className="input-background-color text-white w-8 h-8 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-black flex items-center justify-center"
                >
                    &lt;
                </button>

                <div
                    className="pt-7 pb-10 flex overflow-hidden w-full justify-center items-center relative z-10 max-w-[calc(100vw-121px)]"> {/* Limita el ancho máximo */}
                    <div
                        className="flex"
                        style={{
                            transform: `translateX(-${(currentImageIndex * 100) / images.length}%)`,
                            transition: "transform 0.3s ease-in-out",
                            width: `${images.length * 100}%`, // Asegura que el contenedor sea del ancho correcto
                        }}
                    >
                        {images.map((image, index) => {
                            const isSelected = index === currentImageIndex;
                            return (
                                <img
                                    key={index}
                                    src={image.src}
                                    alt={`Image ${index + 1}`}
                                    className={`transition-transform duration-300 ${isSelected ? "scale-125" : "scale-90"} ${isSelected ? "z-20" : "z-10"}`}
                                    style={{
                                        width: "100%", // Ajusta al 100% del contenedor
                                        height: "auto", // Mantiene la relación de aspecto
                                        maxWidth: "90px", // Máximo ancho deseado
                                        maxHeight: "270px", // Máxima altura deseada
                                        margin: "0 clamp(20px, 5vw, 40px)", // Ajusta el margen de manera dinámica
                                        transition: "transform 0.3s ease-in-out",
                                    }}
                                />
                            );
                        })}
                    </div>
                </div>

                <button
                    onClick={nextImage}
                    className="input-background-color text-white w-8 h-8 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-black flex items-center justify-center"
                >
                    &gt;
                </button>
            </div>

            {/* Círculo que contiene el sabor seleccionado */}
            <div className="relative flex flex-col items-center mt-[-40px] z-0">
                <div className="w-36 h-36 rounded-full bg-amber-200 flex items-center justify-center">
                    <div className="text-lg text-black font-bold text-center">
                        <span>{flavorName ? `${flavorName}` : ""}</span>
                    </div>
                </div>

                <button
                    className="absolute text-black w-8 h-8 flex items-center justify-center top-3/4 transform -translate-y-1/2">
                    +
                </button>
            </div>
        </div>
    );
};

export default ProductRic;
