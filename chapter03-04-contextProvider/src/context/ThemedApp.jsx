import { useState, createContext } from 'react'
import App from '../App'

// Create a context
export const AppContext = createContext()

export default function ThemedApp() {
    const [mode, setMode] = useState('white')
    return (
        <AppContext.Provider value={{ mode, setMode }}>
            <App />
        </AppContext.Provider>
    )
}
