import { Route, Switch } from 'react-router';

import { About, Home, Partners, NeedHelp, Team, HowToHelp } from './pages';
import { Donate } from 'components';

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
      <Route path='/equipe' component={Team} />
      <Route path='/como-ajudar' component={HowToHelp} />
    </Switch>
  );
};

export default routers;
