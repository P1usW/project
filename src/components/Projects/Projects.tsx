import { ReturnReposInfo } from '@src/api/gitHubApi/getReposInfo';
import { FC, Suspense } from 'react';
import { Await, useLoaderData } from 'react-router';
import ProjectCard from './ProjectCard/ProjectCard';
import Loading from '@src/ui/Loading/Loading';
import style from './project.module.scss'
import { ReturnUserInfo } from '@src/api/gitHubApi/getUserInfo';
import LazyImage from '@src/ui/LazyImage/LazyImage';

interface LoaderProjects {
  repos: ReturnReposInfo,
  user: ReturnUserInfo,
}

type ReposValues = Awaited<ReturnReposInfo>;
type UserValues = Awaited<ReturnUserInfo>

function getListOrError(values: ReposValues) {
  if (typeof values === 'string') {
    return <h1>Error! Please try again.</h1>
  } 
  
  return values.map((repos) => {
    if (repos.private) return;

    return (
      <ProjectCard
        key={repos.name}
        name={repos.name}
        html_url={repos.html_url}
        language={repos.language}
      />
    )
  })
}

function getUserOrError(values: UserValues) {
  if (typeof values === 'string') {
    return <h1>Error! Please try again.</h1>
  } 

  return (
    <>
      <LazyImage 
        imageClassName={style.project_photo}
        src={values.avatar_url}
        alt='git hub profile avatar'
        divClassName={style.project_user}
      />
      <div className={style.project_photo_filter}>
        <h1 
          className={style.project_header}
        >
          {values.login}
        </h1>
        <h1 
          className={style.project_header}
        >
          Repositories: {values.public_repos}
        </h1>
      </div>
      
    </>
  )
}

const Projects: FC = () => {
  const {repos, user} = useLoaderData() as LoaderProjects;

  return (
    <div className={style.project}>
      <Suspense fallback={<Loading/>}>
        <div 
          className={style.project_user}
        >
          <Await
            resolve={user}
            errorElement={<h1>Error</h1>}
          >
            {(values: UserValues) => getUserOrError(values)}
          </Await>
        </div>
        <div
          className={style.project_list}
        >
          <Await 
            resolve={repos} 
            errorElement={<h1>Error</h1>}
          >
            {(values: ReposValues) => getListOrError(values)}
          </Await>
        </div>
      </Suspense>
    </div>
  );
};

export default Projects;


// interface LoaderProjects {
//   repos: ReturnReposInfo,
//   user: ReturnUserInfo,
// }

// interface Values {
//   repos: Awaited<ReturnReposInfo>,
//   user: Awaited<ReturnUserInfo>;
// } 

// function getListOrError({repos, user}: Values) {
  
//   if (typeof repos === 'string' || typeof user === 'string') {
//     return <h1>Error! Please try again.</h1>
//   } 
//   console.log(repos)
//   return (
//     <>
//       <h1>
//         {user.name}
//       </h1>
//       {
//         repos.map((repos) => {
//           if (repos.private) return;

//           return (
//             <ProjectCard
//               key={repos.name}
//               name={repos.name}
//               html_url={repos.html_url}
//               language={repos.language}
//             />
//           )
//         })
//       }
//     </>
//   )
// }

// const Projects: FC = () => {
//   const {repos, user} = useLoaderData() as LoaderProjects;

//   return (
//     <div className={style.project}>
//       <Suspense fallback={<Loading/>}>
//         <Await 
//           resolve={{repos, user}} 
//           errorElement={<h1>Error</h1>}
//         >
//           {(values: Values) => getListOrError(values)}
//         </Await>
//       </Suspense>
//     </div>
//   );
// };

// export default Projects;