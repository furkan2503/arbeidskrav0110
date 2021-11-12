import './App.css';
import React, { FC } from 'react';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Overview, Configurations, History, Users, Order, Revenue } from './pages/Overview';
import { Container } from 'react-bootstrap';

const App: FC = () => {
  return(

   
 
  <Router>
    <Container>
            <Sidebar/>
            <Switch>
              <Route path="/overview" component={Overview} exact></Route>
              <Route path="/overview/users" component={Users} exact></Route>
              <Route path="/overview/revenue" component={Revenue} exact></Route>
              <Route path="/order" component={Order} exact></Route>
              <Route path="/history" component={History} exact></Route>
              <Route path="/configuration" component={Configurations} exact></Route>
            </Switch>
    </Container>
  </Router>
  
  
  
  
  );
};

export default App;
