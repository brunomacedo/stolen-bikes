import {
  Switch, BrowserRouter, Route, Redirect,
} from 'react-router-dom';
import Routes from './routers';

const Routers = () => (
  <BrowserRouter>
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

      <Redirect to="/404" />
    </Switch>
  </BrowserRouter>
);

export default Routers;
