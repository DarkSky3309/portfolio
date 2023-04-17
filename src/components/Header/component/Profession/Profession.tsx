import React, {useEffect, useRef, useState} from 'react';
import './Profession.scss'
const Profession = () => {
    const [profession, setProfession] = useState<string>('');
    const listOfProfession = [
        'Front-end developer',
        'UI-designer',
        'Freelancer',
    ]
    const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
    const blink = useRef() as React.MutableRefObject<HTMLSpanElement>
    const timer = (ms:number) => new Promise(res => setTimeout(res, ms))
    async function writeProfession (index: number) {
        for (const word of listOfProfession[index]) {
            setProfession(prevState => prevState + word)
            await timer(50);
        }
        blink.current.classList.add('blinking')
        await timer(2000)
        blink.current.classList.remove('blinking')
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
    useEffect(() => {
        setProfession('F')
    }, [])
    return (
        <p>I'm a <span className={'profession'}>{profession}</span><span className={'blinking'} ref={blink}>|</span></p>
    );
};

export default Profession;