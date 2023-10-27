import React, { useEffect, useState } from 'react'

const SecondHooksContinue = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }
    useEffect(() => {
      window.addEventListener("resize", handleResize)
    
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }, [])
    
  
    return (
    <>
    <div>
    {windowWidth}
    </div>
    </>
  )
}

export default SecondHooksContinue