import { FC } from 'react';
import style from './about.module.scss';
import {
  AboutBiography,
  AboutSkills,
  AboutExperience,
  AboutEducations,
} from './AboutPages'

const About: FC = () => {
  
  return (
    <div 
      className={style.about_page}
    >    
      <AboutBiography/>
      <AboutSkills/>
      <AboutExperience/>
      <AboutEducations/>
    </div>
  );
};

export default About;

