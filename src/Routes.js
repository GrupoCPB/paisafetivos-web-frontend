import { Route, Switch } from 'react-router';

import { Home } from './pages/Home.js';
import { Partners } from './pages/Partners.js';
import NeedHelp from './pages/NeedHelp.js';
import About from './pages/About.js';

const routers = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/parceiros" component={Partners} />
      <Route exact path="/ajuda" component={NeedHelp} />
      <Route path="/sobre" component={About} />
    </Switch>
  );
};

export default routers;
