import { Route, Switch } from 'react-router';

import {  Home, Partners, NeedHelp, Team, HowHelp } from './pages';



const routers = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/parceiros" component={Partners}/>
      <Route exact path="/preciso-de-ajuda" component={NeedHelp} />
      {/* <Route path="/sobre-nós" component={About} /> */}
      <Route path='/equipe' component={Team} />
      <Route path='/como-ajudar' component={HowHelp} />
    </Switch>
  );
};

export default routers;
