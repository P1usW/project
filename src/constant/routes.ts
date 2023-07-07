import Home from "@src/components/Home/Home";
import { defer } from "react-router";

import { lazy } from "react";
import { getReposInfo } from "@src/api/gitHubApi/getReposInfo";
import { getUserInfo } from "@src/api/gitHubApi/getUserInfo";

const Projects = lazy(() => import(/* webpackChunkName: "Projects" */ '@src/components/Projects/Projects'));
const NotFound = lazy(() => import(/* webpackChunkName: "NotFound" */ '@src/components/NotFound/NotFound'));
const About = lazy(() => import(/* webpackChunkName: "About" */ '@src/components/About/About'));

const publicRoutes = [
  {
    path: '/',
    Component: Home
  },
  {
    path: 'about',
    Component: About 
  },
  {
    path: 'projects',
    Component: Projects,
    loader: () => {
      const username = 'P1usW';
      const repos = getReposInfo(username);
      const user = getUserInfo(username)
      return defer({repos, user})
    }
  },
  {
    path: '*',
    Component: NotFound
  }
];

export {
  publicRoutes,
}