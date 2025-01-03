import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageNotFound from './pages/404';
import Home from './pages/Home';

/**
 * App default component
 */
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
