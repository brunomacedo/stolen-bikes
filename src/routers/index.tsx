import {
  Switch, BrowserRouter, Route,
} from 'react-router-dom';
import { AppProvider } from '../context/App';
import PageNotFound from '../pages/404';
import Routes from './routers';

const Routers = () => (
  <BrowserRouter>
    <AppProvider>
      <Switch>
        {Routes
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

        <Route component={PageNotFound} />
      </Switch>
    </AppProvider>
  </BrowserRouter>
);

export default Routers;
