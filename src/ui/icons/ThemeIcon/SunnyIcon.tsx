import { Icon } from '@iconify/react';
import style from '../icon.module.scss';
import { FC } from 'react';

const SunnyIcon: FC = () => {
  return (
    <Icon
      className={style.link_icon}
      icon='line-md:moon-to-sunny-outline-transition'/>
  );
};

export default SunnyIcon;