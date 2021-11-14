import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Bikes from './Pages/AllBikes/Bikes/Bikes';
import LogIn from './Pages/LogIn/LogIn/LogIn';
import Registration from './Pages/LogIn/Registration/Registration';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Visits from './Pages/Visits/Visits/Visits';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/LogIn/PrivateRoute/PrivateRoute'


function App() {



  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/allbikes">
              <Bikes></Bikes>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/book/:id">
              <Visits></Visits>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
