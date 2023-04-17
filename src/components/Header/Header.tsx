import React, {useEffect, useState} from 'react';

const Header = () => {
    const [profession, setProfession] = useState<string>('');
    const listOfProfession = [
        'Front-end developer',
        'UI-designer',
        'Freelancer',
    ]
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const timer = (ms:number) => new Promise(res => setTimeout(res, ms))
    async function writeProfession (index: number) {
        for (const word of listOfProfession[index]) {
            setProfession(prevState => prevState + word)
            await timer(50);
        }
        await timer(2000)
        for (let i = listOfProfession[currentWordIndex].length; i > 0; i--){
            setProfession(prevState => prevState.slice(0, -1))
            await timer(50)
        }
    }
    useEffect(() => {
        if (currentWordIndex < listOfProfession.length){
            writeProfession(currentWordIndex).then(() => setCurrentWordIndex(prevState => prevState + 1))
        } else {
            setCurrentWordIndex(0)
        }
    }, [currentWordIndex])
    return (
        <header>
            <h1>Hi. this is Igor Shevchenko</h1>
            <p>I'm a {profession}</p>
        </header>
    );
};

export default Header;