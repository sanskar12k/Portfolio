
import './App.css';
import Name from './Name';
import Navbar from './Navbar';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Home';
import Hobbies from './Hobbies';
import Achivement from './Achievement';
import Contact from './Contact';
import Skills from './Skills';
import Education from './Education';

function App() {
  return (
    <Router>
        <div className="App">
       <Name/>
       <div className="nav">
         <Navbar/>
       </div>
       <Switch>
         <Route exact path = "/Portfolio/">
         <Home/>
         </Route>
         <Route  path = "/Portfolio/Hobbies">
           <Hobbies/>
         </Route>
         <Route  path = "/Portfolio/Achivement">
           <Achivement/>
         </Route>
         <Route path = "/Portfolio/Skills">
           <Skills/>
         </Route>
         <Route path = "/Portfolio/Education">
           <Education/>
         </Route>
         <Route  path = "/Portfolio/Contact">
           <Contact/>
         </Route>
       </Switch>
    </div>
    </Router>
  );
}

export default App;
