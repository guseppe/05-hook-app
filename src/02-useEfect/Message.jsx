import { useEffect, useState } from "react"

export const Message = () => {
  const [coords, setCoords] = useState({x:0, y:0});
  useEffect(() => {
    //console.log('Message Mounted');
    const onMouseMove = ({x, y})=>{
        setCoords({x, y});
        //console.log(coords);
    }
    window.addEventListener('mousemove',onMouseMove);
    return () => {
        //console.log('Message UnMounted');
        window.removeEventListener('mousemove', onMouseMove);
    }
  }, [])
  
  return (
    <>
    <h2>Usuario ya existe</h2>
    { JSON.stringify(coords) }
    </>
  )
}
