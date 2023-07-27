import { FC } from 'react';
import style from './about-educations.module.scss';
import AnimationCard from '@src/ui/AnimationCard/AnimationCard';

const AboutEducations: FC = () => {
  return (
    <ul
      className={style.education}
    >
      <li
        className={style.education_list}
      >
        <AnimationCard
          pos='bottom'
          rootMargin='0px 0px -50px 0px'
        >
          <div
            className={style.education_list_container}
          >
            <h3
              className={style.education_header}
            >
              Bachelor of Infocommunication Technologies and Communication Systems
            </h3>
            <p
              className={style.education_place}
            >
              Novosibirsk State Technical University (NSTU | NETI)
            </p>
            <p>2017-2021</p>
            <p
              className={style.education_info}
            >
              Obtaining knowledge in the field of telecommunications and communication systems. 
              The thesis was carried out on the topic <q>Synthesis of a current and voltage meter in a laboratory layout of a power amplifier</q>
            </p>
          </div>
        </AnimationCard>
      </li>
      <li
        className={style.education_list}
      >
        <AnimationCard
          pos='bottom'
          rootMargin='0px 0px -50px 0px'
        >
          <div
            className={style.education_list_container}
          >
            <h3
              className={style.education_header}
            >
              Creating Web services in Python
            </h3>
            <p
              className={style.education_place}
            >
              Coursera | Moscow Institute of Physics and Technology, VK, E-Learning Development Fund
            </p>
            <p>2021-2021</p>
            <p
              className={style.education_info}
            >
              Learning backend development in Python using Django and Flask frameworks. 
              Design of small systems and development of own microservices
            </p>
          </div>
        </AnimationCard>
      </li>
      <li
        className={style.education_list}
      >
        <AnimationCard
          pos='bottom'
          rootMargin='0px 0px -50px 0px'
        >
          <div
            className={style.education_list_container}
          >
            <h3
              className={style.education_header}
            >
              In-depth study
            </h3>
            <p
              className={style.education_place}
            >
              Self-education
            </p>
            <p>2022-...</p>
            <p
              className={style.education_info}
            >
              Gradual development of new technologies in the process of creating your own projects, as well as commercial tasks
            </p>
          </div>
        </AnimationCard>
      </li>
    </ul>
  );
};

export default AboutEducations;