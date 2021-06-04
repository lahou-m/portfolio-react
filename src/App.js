import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Services from './containers/Services';
import Projects from './containers/Projects';
import Contact from './containers/Contact';
import "react-animated-term/dist/react-animated-term.css";

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
