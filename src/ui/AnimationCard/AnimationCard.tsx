import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import style from './animationCard.module.scss';

const classNames = {
  left: {
    enter: style.card_left__enter,
    enterActive: style.card_left__enterActive,
    exit: style.card_left__exit,
    exitActive: style.card_left__exitActive,
  },
  right: {
    enter: style.card_right__enter,
    enterActive: style.card_right__enterActive,
    exit: style.card_right__exit,
    exitActive: style.card_right__exitActive,
  },
  top: {
    enter: style.card_top__enter,
    enterActive: style.card_top__enterActive,
    exit: style.card_top__exit,
    exitActive: style.card_top__exitActive,
  },
  bottom: {
    enter: style.card_bottom__enter,
    enterActive: style.card_bottom__enterActive,
    exit: style.card_bottom__exit,
    exitActive: style.card_bottom__exitActive,
  },
  up: {
    enter: style.card_up__enter,
    enterActive: style.card_up__enterActive,
    exit: style.card_up__exit,
    exitActive: style.card_up__exitActive,
  },
  down: {
    enter: style.card_down__enter,
    enterActive: style.card_down__enterActive,
    exit: style.card_down__exit,
    exitActive: style.card_down__exitActive,
  },
  opacity: {
    enter: style.card_opacity__enter,
    enterActive: style.card_opacity__enterActive,
    exit: style.card_opacity__exit,
    exitActive: style.card_opacity__exitActive,
  }
}
interface AnimationCard {
  children?: ReactNode,
  pos: keyof typeof classNames,
  rootMargin?: string,
  threshold?: number | number[],
  divClassName?: string
}

const AnimationCard: FC<AnimationCard> = ({
  children, 
  pos, 
  divClassName=style.card, 
  rootMargin='0px 0px 0px 0px',
  threshold,
  ...props
}) => {
  const divBlock = useRef(null)
  const nodeRef = useRef(null);
  const [inWindow, setInWindow] = useState(false);
  
  useEffect(() => {
    if (!divBlock.current) return;

    const observe = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setInWindow(true);
        observe.disconnect();
      }
    }, {
      rootMargin,
      threshold,
    })
    
    observe.observe(divBlock.current)
    return () => {
      observe.disconnect()
    }
  }, [])

  return (
    <div ref={divBlock}>
      <CSSTransition 
        in={inWindow}
        nodeRef={nodeRef}
        mountOnEnter={true}
        unmountOnExit={true}
        classNames={classNames[pos]}
        timeout={1000}
        >
        <div 
          className={divClassName}
          ref={nodeRef} 
          {...props}
          >
          {children}
        </div>
      </CSSTransition>
    </div>

  );
};


export default AnimationCard;