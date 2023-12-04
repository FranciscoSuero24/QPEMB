import logo from './logo.svg';
import './App.css';
import LoginPage from './components/Login.tsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';


function App() {
  return ( 
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
  </BrowserRouter>

  
  );
}

export default App;
