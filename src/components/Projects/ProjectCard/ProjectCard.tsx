import NewTabLink from "@src/ui/NewTabLink/NewTabLink";
import { FC } from "react";
import style from "./projectCard.module.scss"
import classNames from "classnames";

interface ProjectCard {
    name: string,
    html_url: string,
    language: string,
}

const ProjectCard: FC<ProjectCard> = ({name, html_url, language}) => {
  return (
  <div className={style.container}>
    <div className={style.flipper}>
      <div className={style.front}>
        <h2 className={style.flipper_header}>{name}</h2>
        <p>Main language: <i className={style.flipper_language}>{language}</i></p>
      </div>
      <div className={style.back}>
        <NewTabLink 
          className={style.flipper_link}
          href={html_url}
        >
          Перейти на GitHub
        </NewTabLink>
      </div>
    </div>
  </div>
  );
};

export default ProjectCard;