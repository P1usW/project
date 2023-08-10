import { FC } from 'react';
import style from './expCard.module.scss';
import { Exp } from '../utils/expConstant';
import NewTabLink from '@src/ui/NewTabLink/NewTabLink';

const ExpCard: FC<Exp> = ({
  post,
  company,
  date,
  about,
}) => {
  return (
    <div className={style.slider_card}>
      <h2>
        {post}
      </h2>
      <p className={style.slider_date}>
        {date.join(' - ')} |  {company}
      </p>
      <p className={style.slider_text}>
        {about}
      </p>
    </div>
  );
};

export default ExpCard;