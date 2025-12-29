import React, {useEffect, useState} from "react";

function WidthHeight(){
    const [width,setWidth] = useState(window.innerWidth)
    const [height,setHeight] = useState(window.innerHeight)

    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    useEffect(() => {
    window.addEventListener('resize', handleResize)
    console.log('event listener added')

    //unmound:-removing a component from DOM
    return() =>{
        window.addEventListener('resize',handleResize);
        console.log('Event listener removed')
    }
    },[])
    useEffect(() => {
        document.title = `size:${width} x ${height}`;
    },[width,height]);

    return(
        <>
          <p>window Width: {width}px</p>
          <p>window Height: {height}px</p>
        </>
    )
}
export default WidthHeight