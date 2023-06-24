import { FC } from 'react';
import style from './navBar.module.scss';
import contact from '@src/constant/contact'
import themes from '../../constant/themes';
import { NavLink } from 'react-router-dom';
import NavIcon from '@src/ui/icons/NavIcon';
import Gmail from '@src/ui/icons/MyIcon/Gmail';
import { useTheme } from '@src/hooks/useTheme';
import VkIcon from '@src/ui/icons/MyIcon/VkIcon';
import MoonIcon from '@src/ui/icons/ThemeIcon/MoonIcon';
import SunnyIcon from '@src/ui/icons/ThemeIcon/SunnyIcon';

const NavBar: FC = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <header className={style.header_nav}>
      <nav className={style.nav}>
        <div className={style.nav_left}>
          <NavLink className={style.nav_link} to='/'>
            Home
            <span className={style.nav_link__line}/>
          </NavLink>
          <NavLink className={style.nav_link} to='/about'>
            About
            <span className={style.nav_link__line}/>
          </NavLink>
          <NavLink className={style.nav_link} to='/projects'>
            Projects
            <span className={style.nav_link__line}/>
          </NavLink>
          <NavLink className={style.nav_link} to='/'>
            SayHello
            <span className={style.nav_link__line}/>
          </NavLink>
        </div>
        <div className={style.nav_right}>
          <a
            href={contact.email}
            className={style.nav_link}
          >
            <Gmail/>
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href={contact.vk}
            className={style.nav_link}
          >
            <VkIcon/>
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href={contact.gitHub}
            className={style.nav_link}
          >
            <NavIcon icon='line-md:github'/>
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href={contact.telegram}
            className={style.nav_link}
          >
            <NavIcon icon='line-md:telegram'/>
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href={contact.linkedin}
            className={style.nav_link}
          >
            <NavIcon icon='line-md:linkedin'/>
          </a>
          <button
            className={style.nav_link}
            onClick={() => {
              if (theme === themes.light) setTheme(themes.dark);
              if (theme === themes.dark) setTheme(themes.light);
            }}>
              {
                theme === themes.light 
                ? <MoonIcon/>
                : <SunnyIcon/>
              }
            </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
