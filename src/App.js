import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './Pages/SignIn/SignIn';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddUser from './Pages/AddUser/AddUser';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/adduser">
          <AddUser />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
