import {useState, useEffect} from "react";

const ProductAic = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(2); // Segunda imagen como seleccionada por defecto
    const [flavorName, setFlavorName] = useState("CHICKOO (Sapota)");

    const originalImages = [
        {src: "/src/assets/products/aic1.png", flavor: "CHICKOO (Sapota)"},
        {src: "/src/assets/products/aic4.png", flavor: "CHICKOO (Sapota)"},
        {src: "/src/assets/products/aic3.png", flavor: "CHICKOO (STRAWBERRY)"},
        {src: "/src/assets/products/aic2.png", flavor: "STRAWBERRY (ORANGE)"},
        {src: "/src/assets/products/aic4.png", flavor: "APPLE (Sapota)"},
        {src: "/src/assets/products/aic1.png", flavor: "APPLE (Sapota)"},
        {src: "/src/assets/products/aic3.png", flavor: "APPLE (Sapota)"},
        {src: "/src/assets/products/aic2.png", flavor: "APPLE (Sapota)"},
        {src: "/src/assets/products/aic4.png", flavor: "APPLE (Sapota)"},
        {src: "/src/assets/products/aic1.png", flavor: "APPLE (Sapota)"},
        {src: "/src/assets/products/aic2.png", flavor: "APPLE (Sapota)"},
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
        <div className="w-full mx-auto flex flex-col items-center relative">
            <div className="flex justify-between items-center w-full px-5">
                <button
                    onClick={prevImage}
                    className="input-background-color text-white w-8 h-8 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-black flex items-center justify-center"
                >
                    &lt;
                </button>

                {/* Contenedor del carrusel */}
                <div
                    className="pt-7 pb-10 flex overflow-hidden w-full md:w-[95%] justify-center items-center relative z-10">
                    <div
                        className="flex"
                        style={{
                            transform: `translateX(-${(currentImageIndex * 100) / images.length}%)`,
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
                                    className={`transition-transform duration-300 ${isSelected ? "scale-125" : "scale-90"} ${isSelected ? "z-20" : "z-10"}`}
                                    style={{
                                        width: "160px",
                                        height: "250px",
                                        margin: "0 10px", // Ajusta el margen para mantenerlo dentro del contenedor
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

            {/* Contenedor del círculo a la derecha, más hacia abajo */}
            <div className="absolute right-20 top-[75%] transform translate-y-[-20%] z-0 mr-20 pr-20">
                <div className="w-36 h-36 rounded-full bg-amber-200 flex items-center justify-center">
                    <div className="text-lg text-black font-bold text-center">
                        <span>{flavorName ? `${flavorName}` : ""}</span>
                    </div>
                </div>
                <button
                    className="absolute pl-10 ml-7 text-black w-8 h-8 flex items-center justify-center top-3/4 transform -translate-y-1/2">
                    +
                </button>
            </div>
        </div>
    );
};

export default ProductAic;
