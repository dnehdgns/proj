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

    const onClick = () => {

    }
    const sayhello = console.log("hi")
    const title = useClick(sayhello)


    return(
        <div className="App">
            <div ref={title}>HI</div>
        </div>
    ) 
}

export default UseClick;