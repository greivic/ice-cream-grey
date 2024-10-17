import React from "react";
import {CardStore} from "./CardStore.jsx";
import ImageGalleryStore from "./ImageGalleryStore.jsx";

export function Store() {
const cardsImg = [
    {
        imgLink: 'img1.png',
        openingsText: 'OPENINGS',
        descriptionText: 'Ice cream is one of the most commonly loved desserts on this planet. It has a creamy, sweet taste that many people love. Ice cream is delicious and famous, and it is made from dairy products such as milk and cream, eggs, sugar and sorbet powder. Ice cream can be made using fruits, vegetables, and milk instead of sugar.',
    },
    {
        imgLink: 'img2.png',
        openingsText: 'LAUNCHING',
        descriptionText: 'Ice cream comes in various flavors and styles. From classic vanilla to exotic mango, there’s a flavor for everyone. It’s not just a treat; it’s an experience that brings joy.',
    },
    {
        imgLink: 'img3.png',
        openingsText: 'OPENINGS',
        descriptionText: 'Visit our store to explore a variety of delicious ice cream flavors and unique combinations that cater to all taste buds.Visit our store to explore a variety of delicious ice cream flavors and unique',
    },
];



    return (
        <div className="bg-white pb-1">


            <div className="relative bg-white min-h-screen overflow-hidden mb-10">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{backgroundImage: 'url(/src/assets/img-store.png)'}}
                ></div>

                {/* Contenido visible solo en pantallas grandes */}
                <div
                    className="absolute top-2/4 left-20 ml-20 transform -translate-x-1/2 -rotate-90 text-white hidden lg:block">
                    <h1 className="font-myriadpro font-bold hover:text-yellow-900" style={{fontSize: '4rem', marginLeft: '80px'}}>
                        OUR STORE
                    </h1>
                </div>


                <div className="absolute bottom-4 left-4 text-left ml-20 pl-10 pb-5 hidden lg:block">
                    <a href="#" className="text-sm text-white hover:text-yellow-600">
                        CHECK OUT OUR STORE<br/>VISIT NOW
                    </a>
                </div>


                {/* Contenido visible solo en pantallas pequeñas y medianas */}
                <div
                    className="pt-5 absolute top-0 left-0 right-0 flex flex-col items-center justify-center text-center mt-4 md:block lg:hidden">
                    <h1 className="text-4xl font-bold text-black">OUR STORE</h1>
                    <a href="#" className="text-sm font-bold pt-5 text-white">
                        CHECK OUT OUR STORE<br/>VISIT NOW
                    </a>
                </div>

                <ImageGalleryStore/>
            </div>


            <div className="container mx-auto mt-6 flex flex-wrap justify-start p-7 mb-10">
                {cardsImg.map((card, index) => {
                    const {imgLink, openingsText, descriptionText} = card;
                    return (
                        <CardStore
                            key={index}
                            imgLink={imgLink}
                            openingsText={openingsText}
                            descriptionText={descriptionText} // Pasar texto de descripción
                        />
                    );
                })}
            </div>


        </div>

    );
}
