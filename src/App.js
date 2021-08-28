import './App.scss';

import Cookies from 'js-cookie';

import Home from './pages/Home.js';
import Signup from './pages/Signup.js';
import Signin from './pages/Signin.js';
import Lobby from './pages/Lobby.js';
import Profile from './pages/Profile.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {

    const cookie1 = Cookies.get('cookie1');

    return (
        <div className="App">
            {cookie1}
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
                    <Route path="/profile">
                        <Profile />
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
