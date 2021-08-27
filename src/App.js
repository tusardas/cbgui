import './App.scss';
import Home from './pages/Home.js';
import Signup from './pages/Signup.js';
import Signin from './pages/Signin2.js';
import Lobby from './pages/Lobby.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="/signin">
                    <Signin />
                </Route>
                <Route path="/lobby">
                    <Lobby />
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
