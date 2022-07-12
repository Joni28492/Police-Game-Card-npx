import { useEffect, useState } from "react";


export const useResponsiveWidth = (initialState:number=window.innerWidth) => {

    const [width, setWidth] = useState(initialState);
  
    useEffect(() => {
      // console.log("Resolucion Cambio a "+ width );
      window.addEventListener("resize", ()=>{
        // console.log("Cambio " +  window.innerWidth)
        setWidth(window.innerWidth);
      });
    }, [width]);
  

    return { width }
}