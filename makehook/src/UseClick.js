import { useEffect, useRef } from "react";

function UseClick() {

    const useClick = (onClick) => {
        const element = useRef();
        useEffect(() => {
            if(element.current){
                element.current.addEventListener("click", onClick);
            }
            return () => {
                if(element.current){
                    element.current.removeEventListener("click", onClick);
                }
            }
        }, [])
        return element;
    }
    
    const sayhello = () => console.log("Hello")
    const title = useClick(sayhello)

    return(
        <div className="App">
            <h1 ref={title}>HI</h1>
        </div>
    ) 
}

export default UseClick;