import React from 'react'
import './style/index.scss'
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <>
            <Navigation/>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}

export default App
