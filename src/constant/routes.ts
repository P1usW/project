import Home from "@src/components/Home/Home";
import { defer } from "react-router";
import { getUserInfo } from "@src/api/GitHubApi";
import { lazy } from "react";

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
      const user = getUserInfo('Pl1usW');
      return defer({user})
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