import { ReturnUserInfo, UserInfo } from '@src/api/GitHubApi';
import { FC, Suspense } from 'react';
import { Await, useLoaderData } from 'react-router';

interface LoaderProjects {
  user: ReturnUserInfo
}

const Projects: FC = () => {
  const {user} = useLoaderData() as LoaderProjects;
  console.log(user)
  return (
    <div>
      <Suspense fallback={<h1>Loading</h1>}>
        <Await 
          resolve={user} 
          errorElement={<h1>Error</h1>}
        >
          {(values: UserInfo) => <h1>{values.name}</h1>}
        </Await>
      </Suspense>
    </div>
  );
};

export default Projects;