import { useEffect } from "react";


const useTile = (title) => {
    useEffect(() => {
     document.title= 'Savor Every Bite ' +` | ${title}` ;
    },[])
}

export default useTile;