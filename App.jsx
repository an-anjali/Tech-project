import React from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Service from "./Component/Service";
import Way from "./Component/Way";
import Icon from "./Component/Icon";
import Why from "./Component/Why";
import Gallery from "./Component/Gallery";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

function App() {
    return (
        <>
            <Navbar />,
            <Home />,
            <Service/>,
            <Way/>,
            <Icon/>,
            <Why/>,
            <Gallery/>,
            <Contact />,
            <Footer />
        </>
    );
}

export default App;