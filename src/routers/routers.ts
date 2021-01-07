import Home from '../pages/Home';
import Details from '../pages/Details';
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
  {
    path: '/incidents/:id',
    active: true,
    component: Details,
  },
];

export default Routes;
