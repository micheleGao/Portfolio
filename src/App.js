import './App.css';
import Navigation from './Components/Navigation';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import Featured from './Components/Featured';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
      <Navigation/>
      </nav>
      <main>
          <Switch>
            <Route path="/Contact" render={() => <Contact  />} />
            <Route path="/Featured" render={() => <Featured />} />
            <Route path="/AboutMe" render={() => <AboutMe />} />
            <Route path="/" render={() => <AboutMe />} />
          </Switch>
        </main>

    </div>
  );
}

export default App;
