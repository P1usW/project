import { FC } from 'react';
import style from '../icon.module.scss';

const VkIcon: FC = () => {
  return (
    <svg className={style.link_icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="none" strokeDasharray='100' strokeDashoffset='0' stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 19h-4a8 8 0 0 1-8-8V6h4v5a4 4 0 0 0 4 4h0V6h4v4.5h.03A4.531 4.531 0 0 0 18 6.004h4l-.342 1.711A6.858 6.858 0 0 1 18 12.504h0a5.34 5.34 0 0 1 3.566 4.111L22 19.004h0h-4a4.531 4.531 0 0 0-3.97-4.496v4.5z">
        <animate fill='freeze' attributeName='stroke-dashoffset' dur='1.3s' values='100;0'/>
      </path>
    </svg>
  );
};

export default VkIcon;