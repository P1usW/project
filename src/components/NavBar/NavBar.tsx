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
import NewTabLink from '@src/ui/NewTabLink/NewTabLink';

const NavBar: FC = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <header className={style.header_nav}>
      <nav className={style.nav}>
        <div className={style.nav_left}>
          <NavLink 
            className={style.nav_link} 
            to='/'
            aria-label="Home page"
          >
            Home
            <span className={style.nav_link__line}/>
          </NavLink>
          <NavLink 
            className={style.nav_link} 
            to='/about'
            aria-label="About me page"
          >
            About
            <span className={style.nav_link__line}/>
          </NavLink>
          <NavLink 
            className={style.nav_link} 
            to='/projects'
            aria-label="My projects page"
          >
            Projects
            <span className={style.nav_link__line}/>
          </NavLink>
        </div>
        <div className={style.nav_right}>
          <a
            href={contact.email}
            className={style.nav_link}
            aria-label="Gmail link"
          >
            <Gmail/>
          </a>
          <NewTabLink
            href={contact.vk}
            className={style.nav_link}
            aria-label="Vkontakte link"
          >
            <VkIcon/>
          </NewTabLink>
          <NewTabLink
            href={contact.gitHub}
            className={style.nav_link}
            aria-label="GitHub link"
          >
            <NavIcon icon='line-md:github'/>
          </NewTabLink>
          <NewTabLink
            href={contact.telegram}
            className={style.nav_link}
            aria-label="Telegram link"
          >
            <NavIcon icon='line-md:telegram'/>
          </NewTabLink>
          <NewTabLink
            href={contact.linkedin}
            className={style.nav_link}
            aria-label="Linked in link"
          >
            <NavIcon icon='line-md:linkedin'/>
          </NewTabLink>
          <button
            className={style.nav_link}
            aria-label="Switch theme"
            onClick={() => {
              if (theme === themes.light) setTheme(themes.dark);
              if (theme === themes.dark) setTheme(themes.light);
            }}
          >
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
