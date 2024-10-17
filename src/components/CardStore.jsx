import React, { useState } from "react";

export function CardStore({ imgLink, openingsText, descriptionText }) {
    const [showMore, setShowMore] = useState(false); // Estado para controlar el texto adicional

    const toggleShowMore = () => {
        setShowMore(!showMore); // Alternar estado
    };

    return (
        <div className="flex-shrink-0 w-full md:w-full lg:w-1/3 border border-b-0 border-black"> {/* Cambiado a w-full para pantallas pequeñas y medianas */}
            <div className="flex flex-col items-start text-black p-5">
                <hr className="w-1/6 border-t-4 border-gray-400" /> {/* Línea más gruesa */}
                <p className="lg:text-sm md:text-4xl mb-2 transition duration-300 hover:text-gray-500">
                    {openingsText}
                </p>

                <h1 className="font-myriadpro text-3xl md:text-4xl font-bold mb-2 transition duration-300 hover:text-yellow-900 pt-20">
                    OUR<br />
                    STORE
                </h1>

                <p className={`font-myriadpro mb-4 w-full text-justify transition duration-300 hover:text-yellow-900 ${showMore ? "" : "line-clamp-3"}`}>
                    {descriptionText}
                </p>

                <div className="flex justify-center w-full">
                    <button
                        className="text-gray-500 mt-1"
                        onClick={toggleShowMore} // Cambiar visibilidad
                    >
                        {showMore ? "Show Less" : "More"} {/* Cambiar el texto del botón */}
                    </button>
                </div>

                <img
                    src={`/public/assets/gallery/${imgLink}`}
                    alt="Logo"
                    className="h-100 w-auto mb-4 border border-transparent hover:border-gray-500 transition duration-300"
                />
            </div>
        </div>
    );
}
