import { Route, Switch, useLocation } from 'react-router-dom';
import Home from './containers/Home';
import Services from './containers/Services';
import Projects from './containers/Projects';
import Contact from './containers/Contact';
import "react-animated-term/dist/react-animated-term.css";
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { keepTheme } from './UI/theme';



function App() {

  useEffect(() => {
    keepTheme()
  }, [])

  let location = useLocation();
  return (
    <div className='app'>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path='/' component={Home} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </AnimatePresence>
    </div>
  );
}

export default App;
