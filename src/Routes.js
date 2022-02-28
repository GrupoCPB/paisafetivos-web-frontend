import { Route, Switch } from 'react-router';

import { About, Home, Partners, NeedHelp } from 'pages';
import { Donate } from './components';

const routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/parceiros">
        <Partners />
        <Donate />
      </Route>
      <Route exact path="/preciso-de-ajuda">
        <NeedHelp />
      </Route>
      <Route path="/sobre-nós" component={About} />
    </Switch>
  );
};

export default routers;
