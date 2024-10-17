import React from "react";
import ProductBic from "./ProductBic.jsx";
import SeeMore from "./SeeMore.jsx";
import ProductAic from "./ProductAic.jsx";
import ProductRic from "./ProductRic.jsx";

export function Products() {

    return (
        <div className="bg-white flex flex-col items-center">

            <div className="">
                <div className="w-full flex justify-between pt-20">
                    <div className="flex items-center pl-20">
                        <h1 className="font-myriadpro text-3xl text-black md:text-4xl font-bold mb-2 transition duration-300 hover:text-yellow-950">
                            CHECK<br/>
                            OUR PRODUCTS
                        </h1>
                    </div>
                    <SeeMore textContent={"TUBS"}/>

                </div>

                <br/>

                <div className="w-full flex justify-center mt-10">
                    <ProductBic/>
                </div>
            </div>

            <div className="">
                <div className="w-full flex justify-between ">
                    <div className="flex items-center pl-20">
                        <div
                            className="text-3xl text-black md:text-4xl font-bold transition duration-300 hover:text-yellow-950">
                        </div>
                    </div>
                    <SeeMore textContent={"SCOOP"}/>

                </div>

                <br/>

                <div className="w-full flex justify-center">
                    <ProductAic/>
                </div>
            </div>

            <div className="mt-20">
                <div className="w-full flex justify-between">
                    <div className="flex items-center pl-20">
                        <div
                            className="text-3xl text-black md:text-4xl font-bold transition duration-300 hover:text-yellow-950">
                        </div>
                    </div>
                    <SeeMore textContent={"SHAKES"}/>

                </div>

                <br/>

                <div className="w-full flex justify-center">
                    <ProductRic/>
                </div>
            </div>


            {/* Botón centrado */}
            <div className="w-full flex justify-center mt-20 mb-10">
                <button type="submit"
                        className="input-search-background hover:bg-black text-white font-bold py-1 px-10 rounded-md">
                    SEE ALL
                </button>
            </div>
        </div>
    );
}
