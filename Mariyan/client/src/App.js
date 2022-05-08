import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './Main';

import addInquiry from "./component/Inquiry/Add_Inquiry";
import viewInquiry from "./component/Inquiry/View_Inquiry";
import editInquiry from "./component/Inquiry/Edit_Inquiry";

import UserReg from "./component/User/User_Reg";
import Login from "./component/User/Login";

function App() {
  return (
    
      <Router>

        <div>
          <Main/> 

          <Switch>
            <Route path="/addInquiry" exact component={addInquiry}/>
            <Route path="/viewInquiry" exact component={viewInquiry}/> 
            <Route path="/editInquiry/:id" exact component={editInquiry}/>  
            <Route path="/login" exact component={Login}/> 
            <Route path="/" exact component={UserReg}/>  
          </Switch>

        </div>        

      </Router>

  );
};

export default App;
