import {NavBar} from "./components/NavBar";
import {WelcomeScreen} from "./components/WelcomeScreen";
import {HomePage} from "./components/HomePage";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export const App= ()=> {
  return (
      <>
          <NavBar/>

         <Router>
             <Switch>
                 <Route path="/"  exact component={WelcomeScreen} />
                 <Route path="/homepage" component={HomePage} />
             </Switch>
         </Router>



      </>

  );
}

export default App;
