import { useState, useEffect, MutableRefObject } from "react";
const useOnScreen = (ref: MutableRefObject<any>) => {
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting)
        );
       if (ref.current) {
           observer.observe(ref.current);
        }
    }, [])
    return isIntersecting;
}
export default useOnScreen