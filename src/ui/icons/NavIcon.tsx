import { Icon } from '@iconify/react';
import style from './icon.module.scss';
import { FC } from 'react';

interface NavIcon {
  icon: string
}

const NavIcon: FC<NavIcon> = ({icon}) => {
  return (
    <Icon
      className={style.link_icon}
      icon={icon}/>
  );
};

export default NavIcon;