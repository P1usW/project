import { FC } from 'react';
import { skills } from '@src/constant/skills';
import style from './about-skills.module.scss';
import AnimationCard from '@src/ui/AnimationCard/AnimationCard';

function skillsMap(
    skillsArr: string[], 
    name: string, 
    className: string,
    pos: 'bottom' | 'top'
  ) {
  return (
    <AnimationCard 
      pos={pos}
      key={name}
      divClassName={className}
    >
      <h1>
        {name}
      </h1>
      <ul className={style.skills_list}>
        {
          skillsArr.map(skill => {
            return (
              <li 
                key={skill}
                
              >
                {skill}
              </li>
            )
          })
        }
      </ul>
    </AnimationCard>
  )
}

const AboutSkills: FC = () => {
  return (
    <div className={style.skills}>
      {skillsMap(skills.language, 'Language', style.skills_language, 'top')}
      {skillsMap(skills.frontend, 'Frontend', style.skills_frontend, 'bottom')}
      {skillsMap(skills.backend, 'Backend', style.skills_backend, 'top')}
      {skillsMap(skills.other, 'Other technology', style.skills_other, 'bottom')}
    </div>
  );
};

export default AboutSkills;