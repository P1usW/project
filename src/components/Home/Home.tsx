import { FC } from 'react';
import logo1 from '@src/assets/me1_resize.png';
import style from './home.module.scss';
import { Icon } from '@iconify/react';
import resumePdf from '@src/assets/resume.pdf';
import { ButtonLink } from '@src/ui/Button/Buttons';
import AnimationCard from '@src/ui/AnimationCard/AnimationCard';
import LazyImage from '@src/ui/LazyImage/LazyImage';

const Home: FC = (() => {
  return (
    <div className={style.home}>
      <div
        className={style.home_left}
      >
        <LazyImage 
          src={logo1} 
          imageClassName={style.home_photo} 
          alt="My AI photo by Midjourney"
        />
      </div>
      <div className={style.home_right}>
        <AnimationCard pos='up'>
          <div className={style.home_gradient}>
            <h1>Ivan Shavrin</h1>
            <h1>Frontend developer</h1>
            <p className={style.home_text}>
              I am a fullstack developer who transfers my ideas to web applications. 
              I do not stand still and am always happy to learn new technologies.
              You can get acquainted with my resume by clicking the buttons at the bottom. Contacts are pinned to the navigation.
            </p>
          </div>
          <div
            className={style.home_buttons}
          > 
            <ButtonLink
              target='_blank'
              rel='noreferrer'
              download={true}
              type='download'
              href={resumePdf}
            >
              Download resume <Icon icon="line-md:download-outline" />
            </ButtonLink>
            <ButtonLink
              target='_blank'
              rel='noreferrer'
              href='https://novosibirsk.hh.ru/resume/529f5555ff0c03874e0039ed1f745345536774'
            >
              Link to resume
            </ButtonLink>
          </div>
        </AnimationCard>
      </div>
    </div>
  );
});

export default Home;
