import { useState, useEffect } from "react";


export default function useScrollQuery() {

    const [isSticky, setIsSticky] = useState(false);
    const lastScrollTop = 0;

    const handleScrolled = () => {
         const st = window.scrollY || document.documentElement.scrollTop; 
        if (st > lastScrollTop) {
            console.log("scroll down")
         } else if (st < lastScrollTop) {
            setIsSticky(true);
         }
        
       
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScrolled);
    }, []);
    return isSticky;
}