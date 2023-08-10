import { FC } from 'react';
import style from './about-skills.module.scss';
import { languageData, frontSkills, backendSkills, otherSkills } from './skills.constant';
import SkillsRow from './SkillsRow/SkillsRow';


const AboutSkills: FC = () => {
  return (
    <div className={style.skills}>
      <SkillsRow
        containerClassName={style.skills_row}
        textClassName={style.text_left}
        data={languageData}
        type='line'
        title='Language Skills %'
        className={style.graph}
      >
        <h2 className={style.skills_header}>
          My language skills  
        </h2>
        <p>
          For the first time I started writing something serious at university, it was programs for microcontrollers in C++. 
          At the end of my studies, I became interested in other areas, so I started learning python (machine learning, desktop applications, backend). 
          While working on a server written in python, I started studying JavaScript and all the technologies that were associated with it in parallel.
        </p>
      </SkillsRow>
      <SkillsRow
        containerClassName={style.skills_row}
        textClassName={style.text_right}
        data={frontSkills}
        type='line'
        title='Frontend Skills %'
        className={style.graph}
      >
        <h2 className={style.skills_header}>
          My frontend skills  
        </h2>
        <p>
          After I completely switched to JavaScript, my path continued with the study of many new technologies, 
          as well as the subtleties and nuances of both the language and the tools that I have to work with to this day.
        </p> 
      </SkillsRow>
      <SkillsRow
        containerClassName={style.skills_row}
        textClassName={style.text_left}
        data={backendSkills}
        type='line'
        title='Backend Skills %'
        className={style.graph}
      >
        <h2 className={style.skills_header}>
          My backend skills  
        </h2>
        <p>
          However, I didn&apos;t forget about what I was learning when I was developing the backend of the application.
          In addition to the technologies already studied, the NodeJS platform was added, 
          Which allowed me to train my skills in the language I already liked.
        </p> 
      </SkillsRow>
      <SkillsRow
        containerClassName={style.skills_row}
        textClassName={style.text_right}
        data={otherSkills}
        type='line'
        title='Other Skills %'
        className={style.graph}
      >
        <h2 className={style.skills_header}>
          My other skills  
        </h2>
        <p>
          Throughout my journey, knowledge about some other technologies and tools has also been studied and put into practice.
        </p>  
      </SkillsRow>    
    </div>
  );
};

export default AboutSkills;