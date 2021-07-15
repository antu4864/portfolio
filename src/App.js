import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import  Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";


const App= () => {
  return (

    <>
    <div className="main">

      <Navbar />

     <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/About" component={About} />
         <Route exact path="/Skill" component={Skill} />
         <Route exact path="/Project" component={Project} />
         <Route exact path="/Contact" component={Contact} />
         <Redirect to="/" />
     </Switch>

     <Footer/>
     
    </div>
   
    
</>
  );
}

export default App;
