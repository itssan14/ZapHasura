import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import "normalize-css";
// Components
import NotFound from "./components/NotFound";
import App from "./App";
import Login from "./components/LoginPage";
import Register from "./components/Register"

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact={true} />
      <Route path="/form" component={App} />
      <Route path="/register" component={Register}/>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Router />, document.getElementById("root"));
registerServiceWorker();
