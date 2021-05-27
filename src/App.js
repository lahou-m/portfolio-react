import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Services from './containers/Services';
import Projects from './containers/Projects';
import Contact from './containers/Contact';
import "react-animated-term/dist/react-animated-term.css";
import About from './containers/About';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
