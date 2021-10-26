import { Route, Switch } from "react-router";

import { Home } from "./pages/Home";

const routers =  () =>{
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
        </Switch>
    );
}

export default routers