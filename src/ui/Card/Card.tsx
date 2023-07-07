import { FC, ReactNode } from "react";
import style from './card.module.scss'

interface Card {
  children?: ReactNode 
}

const Card: FC<Card> = ({children}) => {
  return (
    <div
      className={style.card}
    >
      {children}
    </div>
  );
};

export default Card;