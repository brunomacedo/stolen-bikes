import ReactDOM from 'react-dom';
import Routers from './routers';
import reportWebVitals from './reportWebVitals';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-datepicker/dist/react-datepicker.css';

ReactDOM.render(
  <Routers />,
  document.getElementById('root'),
);

reportWebVitals();
