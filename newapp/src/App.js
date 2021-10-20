import logo from './logo.svg';
import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from "react-router-dom";

import Header from './Componentes/Header/header';
import Login from './Componentes/Login/login';
import Ventas from './Componentes/Ventas/ventas';


function App() {
  return (
    <div className="App">
      <Header></Header>   
      <Router> 
        <Switch>
          <Route path="/login">
            <Login></Login> 
          </Route>
          <Route path="/Ventas">
            <Ventas></Ventas> 
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
