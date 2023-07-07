import { FC } from 'react';
import style from './about.module.scss';
import AnimationCard from '../../ui/AnimationCard/AnimationCard';

const About: FC = () => {
  
  return (
    <>    
      <div className={style.about}>
        <div className={style.about_first}>
          <AnimationCard
            pos='left'
            divClassName={style.divClassName}
          >
            <div className={style.biography}>
              <h1
                className={style.biography_header}
              >
                Biography
              </h1>
              <p className={style.biography_text}>
                Hi, i`m <strong>Ivan Shavrin</strong>, a frontend and backend developer.
                My love is to create interesting and beautiful web applications. 
                Every new project I`m working on, I carefully check and optimize. 
                I want everyone to be able to use my development and not have any problems using it.
              </p>
              <p className={style.biography_text}>
                I believe that the purpose of each created application is to convey all the work that people have put into it. 
                Transfer your skills through design and functionality, as well as be interested in the development of your product
              </p>
              <p className={style.biography_text}>
                Even when I was young, I looked at programming with surprise and wondered <q>How can I do something like this?</q>.
                While studying at the university, I tried out several languages, such as Java, C++, C, Python, 
                but in the end I was only interested in JavaScript and a little bit later TypeScript.
              </p>
            </div>
          </AnimationCard>
          <AnimationCard
            pos='right'
            divClassName={style.divClassName}
          >
            <div className={style.biography}>
              <div className={style.biography_photo}>
                123
              </div>
            </div>
          </AnimationCard>
        </div>
        <AnimationCard
          pos='bottom'
          divClassName={style.divClassName}
        >
          <div className={style.about_me}>
            <p className={style.biography_text}>
              I have been developing web applications for 1.5 years. I started with backend development in python {'(django/flask)'}.
              After the first project, in which, in addition to the backend, I had to deal with the frontend. 
              In the future, I decided to switch completely to JavaScript and I write all further applications in this language already.
            </p>
            <p className={style.biography_text}>
              Every day I study new material on technologies that have not yet been studied and on those technologies that I already know.
              I also try to repeat the material I have already covered again.
            </p>
            <p className={style.biography_text}>
              In my free time from work and study, I do sports, long walks and reading various literature.
            </p>
          </div>
        </AnimationCard>
      </div>
    </>
  );
};

export default About;