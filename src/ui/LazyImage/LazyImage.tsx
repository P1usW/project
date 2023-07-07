import cn from 'classnames'
import style from './lazyImage.module.scss'
import { useOnScreen } from '@src/hooks/useOnScreen';
import { FC, useEffect, useRef, useState } from 'react';

interface LazyImage {
  alt?: string,
  src: string,
  imageClassName: string,
  divClassName?: string,
  rootMargin?: string,
  [key: string]: unknown, 
}

const LazyImage: FC<LazyImage> = ({
  alt='',
  src,
  imageClassName,
  divClassName,
  rootMargin='0px',
  ...props
}) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const isVisible = useOnScreen(divRef, rootMargin);

  useEffect(() => {
    if (!isVisible || isLoaded) return;

    if (imgRef.current) {
      imgRef.current.addEventListener('load', () => {
        setIsLoaded(true);
      }); 
    }
  }, [isVisible, isLoaded]);

  return (
    <div
      className={cn(divClassName, style.container, {
        [style.containerLoaded]: isLoaded
      })}
      ref={divRef}
    >
      {
      (isVisible || isLoaded) && 
      <img
        alt={alt}
        src={src}
        ref={imgRef}
        className={cn(imageClassName, style.image,{
          [style.imageLoaded]: isLoaded
        })}
        {...props}
      />
      }
    </div>
  )
};

export default LazyImage;