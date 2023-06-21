import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login";
import AppRouter from "./Pages/App/AppRouter";
import Toast from "./components/Toast/Toast";

export default () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/app" component={AppRouter} />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
    {Toast._render}
  </>
);
