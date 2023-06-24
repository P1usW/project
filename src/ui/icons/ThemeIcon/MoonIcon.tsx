import { Icon } from '@iconify/react';
import style from '../icon.module.scss';
import { FC } from 'react';

const MoonIcon: FC = () => {
  return (
    <Icon
      className={style.link_icon}
      icon='line-md:sunny-outline-to-moon-transition'/>
  );
};

export default MoonIcon;