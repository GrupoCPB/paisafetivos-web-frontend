import { Route, Switch } from 'react-router';

import { About, Home, Partners, NeedHelp, Team, Contact,HowHelp, Transparency } from './pages';
import { Donate } from './components';

const routers = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/parceiros" component={Partners} />
      <Route path="/preciso-ajudar" component={NeedHelp} />
      <Route path="/sobre" component={About} />
      <Route path="/equipe" component={Team} />
      <Route path="/transparencia" component={Transparency} />
      <Route path="/doacao" component={Donate} />
      <Route path="/como-ajudar" component={HowHelp} />
      <Route path="/contato" component={Contact} />
    </Switch>
  );
};

export default routers;
