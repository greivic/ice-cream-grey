import React from "react";


const SeeMore = ({textContent}) => {

    return (
        <>
            {/* Texto de la derecha con la línea y el enlace */}
            <div className="flex items-center text-right">
                <div className="pr-20">
                    <h1 className="font-myriadpro text-3xl text-black md:text-4xl font-bold mb-2 transition duration-300 hover:text-yellow-950">
                        {textContent}
                    </h1>
                    {/* Línea que se adapta al tamaño del texto "See More" */}
                    <hr className="w-[7rem] border-t-2 border-black "/>
                    <a href="#" className="font-myriadpro text-black hover:text-yellow-950">See More →</a>
                </div>
            </div>
        </>

    );
};

export default SeeMore;
