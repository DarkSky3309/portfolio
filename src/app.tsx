import React, {useState} from 'react'
import './style.css'
import IMAGE from './assets/images.png'

const App = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>asdasdфывsdasda</h1>
            <button onClick={() => {
                setCount((c) => c + 1)
            }}>Count - {count}</button>
        </div>
    )
}

export default App
