import { FC, SyntheticEvent } from 'react';
import style from './footer.module.scss';
import { Icon } from '@iconify/react';

const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <div
        className={style.footer_text}
      >
        <p>
          <span className={style.footer_span}>Iv</span>an <span className={style.footer_span}>Sh</span>avrin.
        </p>
        <p>
          Frontend developer.
        </p>
      </div>
      <div 
        className={style.footer_text}
      >
        <p>My contacts are on top</p>
        <a
          onClick={(event: SyntheticEvent) => {
            event.preventDefault();
            window.scrollTo(0, 0)
          }}
          className={style.footer_link}
          href='#top'
        >
          back to top 
        </a>
      </div>
      <div
        className={style.footer_text}
      >
        <p>
          This is a test version of the site, if you find a flaw, you can leave a message
          on <i>github</i> <a className={style.footer_icon} target='_blank' rel='noreferrer' href='#'><Icon icon="bx:edit"/></a>
        </p>
        <p>
          © 2023 IvSh. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
