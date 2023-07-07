import { useState, useEffect, MutableRefObject} from 'react';


const useOnScreen = (
  ref: MutableRefObject<HTMLDivElement | null>, 
  rootMargin='0px'
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsIntersecting(true);
        observer.disconnect();
      }
    }, {
      rootMargin
    })

    if (ref.current) observer.observe(ref.current);
    
    return () => {
      observer.disconnect();
    }
  }, [])

  return isIntersecting;
}

export {
  useOnScreen
}