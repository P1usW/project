import { FC, SyntheticEvent, useEffect, useRef, useState } from 'react';
import style from './navBar.module.scss';
import contact from '@src/constant/contact'
import themes from '../../constant/themes';
import { NavLink, useLocation } from 'react-router-dom';
import NavIcon from '@src/ui/icons/NavIcon';
import NavOpenBtn from './NavItem/NavOpenBtn';
import Gmail from '@src/ui/icons/MyIcon/Gmail';
import { useTheme } from '@src/hooks/useTheme';
import VkIcon from '@src/ui/icons/MyIcon/VkIcon';
import NewTabLink from '@src/ui/NewTabLink/NewTabLink';
import MoonIcon from '@src/ui/icons/ThemeIcon/MoonIcon';
import SunnyIcon from '@src/ui/icons/ThemeIcon/SunnyIcon';
import LanguageSwitch from '@src/ui/icons/MyIcon/LanguageSwitch';

const NavBar: FC = () => {
  const { theme, setTheme } = useTheme();
  const [opened, setOpened] = useState(false);
  const header = useRef<HTMLElement>(null);
  const location = useLocation();

  function onClick() {
    console.log(1)
    setOpened(prev => !prev);
  }

  function closeNav(event: SyntheticEvent) {
    if (!header.current) return;
    
    if(Object.is(event.target, header.current)) {
      setOpened(false);
    }
  }
  
  useEffect(() => {
    setOpened(false);
  }, [location])  

  return (
    <>
      <NavOpenBtn onClick={onClick} btnClass={style.nav_btn}/>
      <header 
        ref={header} 
        onClick={closeNav} 
        className={opened ? style.header_nav.concat( ' ', style.header_nav_open) : style.header_nav}
      >
        <nav className={opened ? (style.nav.concat( ' ', style.nav_open)) : style.nav}>
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
              to='/about-me'
              aria-label="About me page"
            >
              About
              <span className={style.nav_link__line}/>
            </NavLink>
            <NavLink 
              className={style.nav_link} 
              to='/experience'
              aria-label="Experience page"
            >
              Experience
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
              style={{cursor: 'not-allowed'}}
              aria-label='Switch language'
              title='In development'
            >
              <LanguageSwitch/>
            </button>
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
    </>
  );
};

export default NavBar;
