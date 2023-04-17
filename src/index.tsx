import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './app'

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode as HTMLElement);
root.render(
            <App/>
)
