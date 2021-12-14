import { Route, Switch } from "react-router";

import { Home } from "./pages/Home.js";
import { Partners } from "./pages/Partners.js";
import { Donate } from "./components/Donate/donate.js";
import { NeedHelp } from "./pages/NeedHelp.js";

const routers =  () =>{
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/parceiros">
                <Partners/>
                <Donate/>
            </Route>
            <Route exact path="/preciso-de-ajuda">
                <NeedHelp />
            </Route>
        </Switch>
    );
}

export default routers