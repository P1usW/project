import { FC, ReactNode } from 'react';
import style from './not-found.module.scss'

interface NotFound {
  children?: ReactNode
}

const NotFound: FC<NotFound> = ({children}) => {
  return (
    <div className={style.not_found}>
      {children}
    </div>
  );
};

export default NotFound;