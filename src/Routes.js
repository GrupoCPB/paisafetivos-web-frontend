import { Route, Switch } from "react-router";

import { Home } from "./pages/Home";
import { Partners } from "./pages/Partners";

export default () =>{
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/parceiros">
                <Partners/>
            </Route>
        </Switch>
    );
}