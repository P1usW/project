import AboutSkills from "./AboutSkills/AboutSkills";
import AboutExperience from "./AboutExperience/AboutExperience";
import { FC } from "react";
import style from './experience.module.scss';

const Experience: FC = () => {
  return (
    <div className={style.experience}>
      <AboutSkills/>
      <AboutExperience/>
    </div>
  );
};

export default Experience;