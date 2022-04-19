import { Route, Switch } from 'react-router';

import { About, Home, Partners, NeedHelp, Team, HowHelp } from './pages';


const routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/parceiros">
        <Partners />
      </Route>
      <Route exact path="/preciso-de-ajuda">
        <NeedHelp />
      </Route>
      <Route path="/sobre-nós" component={About} />
      <Route path='/equipe' component={Team} />
      <Route path='como-ajudar' component={HowHelp} />
    </Switch>
  );
};

export default routers;
