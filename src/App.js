// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Shared/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import Appoint from "./components/Appoint/Appoint";
import Login from "./components/Login/Login";
import EmailLogin from "./components/Login/EmailLogin/EmailLogin";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import AboutUs from "./components/AboutUs/AboutUs";
import FAQ from "./components/FAQ/FAQ";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/faq">
              <FAQ></FAQ>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/elogin">
              <EmailLogin></EmailLogin>
            </Route>
            <PrivateRoute path="/appoint/:appointId">
              <Appoint></Appoint>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
