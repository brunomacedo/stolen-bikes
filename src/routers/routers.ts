import Home from '../pages/Home';
import PageNotFound from '../pages/404';

const Routes = [
  {
    path: '/',
    active: true,
    component: Home,
  },
  {
    path: '/404',
    active: true,
    component: PageNotFound,
  },
];

export default Routes;
