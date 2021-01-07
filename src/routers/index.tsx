import { Switch, BrowserRouter, Route } from 'react-router-dom';
import PageNotFound from '../pages/404';
import routersList from './routers';

const Routers = () => (
  <BrowserRouter>
    <Switch>
      {routersList
        .filter((route) => route.active)
        .map((item, index) => {
          const key = `${index}-item`;
          return (
            <Route
              exact
              key={key}
              path={item.path}
              component={item.component}
            />
          );
        })}

      <Route component={() => <PageNotFound />} />
    </Switch>
  </BrowserRouter>
);

export default Routers;
