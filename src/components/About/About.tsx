import { FC } from 'react';
import style from './about.module.scss';
import {
  AboutBiography,
  AboutEducations,
} from './AboutPages'

const About: FC = () => {
  
  return (
    <div 
      className={style.about_page}
    >    
      <AboutBiography/>
      <AboutEducations/>
    </div>
  );
};

export default About;

