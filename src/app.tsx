import React, {useState} from 'react'
import './style/index.scss'
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    const [navigation, setNavigation] = useState<React.MutableRefObject<HTMLDivElement>>();
    return (
        <>
            <BrowserRouter>
                <Navigation set={setNavigation}/>
            </BrowserRouter>
            <Header navigation={navigation}/>
            <Main/>
            <Footer/>
        </>
    )
}

export default App
