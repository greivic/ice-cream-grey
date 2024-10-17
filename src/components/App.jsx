import React from 'react';
import NavBar from "./NavBar.jsx";
import {Presentation} from "./Presentation.jsx";
import {Products} from "./Products.jsx";
import {Store} from "./Store.jsx";
import Footer from "./Footer.jsx";

function App() {
    return (
        <div className="">
            <NavBar/>
            <Presentation/>
            <Products/>
            <Store/>
            <Footer/>
        </div>
    );
}

export default App;
