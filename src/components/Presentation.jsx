import React from "react";
import ProductIc from "./ProductIc.jsx";

export function Presentation() {
    return (
        <>
            <ProductIc/>

            <div className="pl-5 pr-5">
                <hr className="w-full border-t-3 border-white"/>
            </div>

            <div className="mx-5 md:mx-20 pb-40 pt-40">
                <div
                    className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-5 md:px-20 pt-5">
                    <div
                        className="flex flex-col items-center md:items-start md:w-3/5">
                        <img
                            src="/src/assets/img-presentation.png"
                            alt="Logo"
                            className="h-20 w-auto mb-4 border border-transparent hover:border-gray-500 transition duration-300"
                        />
                        <div className="whitespace-nowrap text-center md:text-left">
                            <h1 className="font-myriadpro text-3xl md:text-4xl font-bold mb-2 transition duration-300 hover:text-gray-500"
                            style={{fontSize: '3rem'}}
                            > The Scoop Behind the Flavors
                            </h1>
                        </div>
                        <p className="mb-4 w-full text-justify transition duration-300 hover:text-gray-500"> At Ice
                            Cream
                            Junction, we believe in crafting joy one scoop at a time.
                            With a commitment to quality and innovation, we source only the
                            finest ingredients to bring you the creamiest, most flavorful ice cream.
                            Our passion for creating unique, delightful experiences drives us to
                            blend tradition with modern tastes. Each scoop is crafted with care,
                            ensuring traceability from farm to spoon. Whether you're indulging in
                            a classic favorite or discovering a new flavor, Ice Cream Junction promises
                            a refreshing, delicious treat with every bite. Welcome to a world where
                            happiness is always just a scoop away!
                        </p>
                    </div>
                    <div className="flex flex-col items-end md:w-2/5 pr-5 md:pr-20">
                        <h1 className="text-6xl md:text-8xl mb-1 transition duration-300 hover:text-gray-500">
                            <strong>25</strong> +</h1>
                        <h1 className="font-myriadpro text-4xl md:text-5xl font-bold mb-2 transition duration-300 hover:text-gray-500">SCOOPS</h1> {/* Cambio de color de texto al hacer hover */}
                    </div>
                </div>
            </div>
        </>

    );
}
