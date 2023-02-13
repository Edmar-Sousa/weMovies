import { useState, useEffect } from "react"


export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState({ 
        width: window.innerWidth, 
        height: window.innerHeight 
    })

    function handleResizeWindow(event: UIEvent) {
        const window = event.target as Window

        setWindowDimensions({ width: window.innerWidth, height: window.innerHeight })
    }

    useEffect(() => {
        window.addEventListener('resize', handleResizeWindow)

        return () => window.removeEventListener('resize', handleResizeWindow, false)
    }, [])

    return windowDimensions
}
