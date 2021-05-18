import { Route, Switch } from "react-router";

import { Home } from "./pages/Home";

export default () =>{
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
        </Switch>
    );
}