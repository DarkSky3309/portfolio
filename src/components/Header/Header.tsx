import React, {useEffect, useState} from 'react';
import Profession from "./component/Profession/Profession";

const Header = () => {

    return (
        <header>
            <h1>Hi. this is Igor Shevchenko</h1>
            <Profession/>
        </header>
    );
};

export default Header;