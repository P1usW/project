import { ReactNode, FC} from 'react'
import style from './button.module.scss';

interface Buttons {
  children?: ReactNode,
  color?: string,
  [key: string]: unknown
}

const Button: FC<Buttons> = ({children, color, ...props}) => {
  return (
    <button 
      className={style.btn_button}
      {...props}
    >
      {children}
    </button>
  );
};

const ButtonLink: FC<Buttons> = ({children, color, ...props}) => {
  return (
    <a  
      className={style.btn_link}
      {...props}
    >
      {children}
    </a>
  );
};

export {
  Button,
  ButtonLink
};