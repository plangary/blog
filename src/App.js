import {NavBar} from "./components/NavBar";
import {WelcomeScreen} from "./components/WelcomeScreen";
import {HomePage} from "./components/HomePage";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {DetailedView} from "./components/DetailedView";
import {useDispatch} from "react-redux";
import {fetchDataAction} from "./redux/actions/getDataActions";
import {useEffect} from "react";

export const App= ()=> {
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(fetchDataAction())
    })

    return (
      <>
          <NavBar/>
          <Router>
             <Switch>
                 <Route path="/"  exact component={WelcomeScreen} />
                 <Route path="/homepage" component={HomePage} />
                 <Route path="/detailedview" component={DetailedView}/>
             </Switch>
         </Router>
      </>
  );
}

export default App;
