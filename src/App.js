import 'bootstrap/dist/css/bootstrap.min.css';

// import necessary object from react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import "pages" component here
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';

import Navigation from './components/Navigation';

function App() {
  return (
    // define <BrowserRouter> as parent element
    <Router>
      <Navigation />
      {/* code <Switch> and <Route> below, according to path and component */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;
