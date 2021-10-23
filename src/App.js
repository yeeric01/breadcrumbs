import './App.css';
import Login from './component/login/Login.js'
import Home from './component/home/Home.js'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/"><Login></Login></Route>
         <Route exact path="/home"><Home></Home></Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
