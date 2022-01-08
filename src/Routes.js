import { Route, Switch } from 'react-router';

import { Home } from './pages/Home.js';
import { Partners } from './pages/Partners.js';
import NeedHelp from './pages/NeedHelp.js';
import About from './pages/About.js';
import Team from './pages/Team.js';
import Transparency from './pages/Transparency.js';
import Donation from './pages/Donation.js';
import HowHelp from './pages/HowHelp.js';
import Contact from './pages/Contact.js';


const routers = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/parceiros" component={Partners} />
      <Route path="/preciso-ajudar" component={NeedHelp} />
      <Route path="/sobre" component={About} />
      <Route path="/equipe" component={Team} />
      <Route path="/transparencia" component={Transparency} />
      <Route path="/doacao" component={Donation} />
      <Route path="/como-ajudar" component={HowHelp} />
      <Route path="/contato" component={Contact} />
    </Switch>
  );
};

export default routers;
