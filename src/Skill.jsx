import React from "react";
import react from "./image/react.png";
import js from "./image/js.png";
import php from "./image/php.png";
import python from "./image/python.png";
import html from "./image/html.png";
import css from "./image/css.png";
import mysql from "./image/mysql.png";
import git from "./image/git.png";

const Skill =()=>{
    return(

<>
<div classNameName="container-fluid ">
    
<div classNameName="row">
<div classNameName="col-lg-4 col-md-4  ">

<div className="skill">


<div className="card1">
    <img src={react} alt="" className="img-fluid skillimg"/>
    <h3 style={{padding:"1rem"}}>React JS</h3>
</div>

<div className="card1">
    <img src={js} alt="" className="img-fluid skillimg"/>
    <h3 style={{padding:"2rem"}}>JavaScript</h3>
</div>

<div className="card1">
    <img src={php} alt="" className="img-fluid skillimg" style={{height:"6rem"}}/>
    <h3 style={{padding:"-1rem"}}>PHP</h3>
</div>

<div className="card1">
    <img src={python} alt="" className="img-fluid skillimg" style={{height:"4rem"}}/>
    <h3 style={{padding:"2rem"}}>Python</h3>
</div>

<div className="card1">
    <img src={html} alt="" className="img-fluid skillimg" style={{height:"4rem"}}/>
    <h3 style={{padding:"2rem"}}>HTML</h3>
</div>

<div className="card1">
    <img src={css} alt="" className="img-fluid skillimg"/>
    <h3 style={{padding:"1rem"}}>CSS</h3>
</div>

<div className="card1">
    <img src={mysql} alt="" className="img-fluid skillimg" style={{height:"4.5rem"}} />
    <h3 style={{padding:"1rem"}}>MySql</h3>
</div>

<div className="card1">
    <img src={git} alt="" className="img-fluid skillimg" style={{height:"4.5rem"}} />
    <h3 style={{padding:"1rem"}}>Github</h3>
</div>

    
</div>


</div>
</div>
</div>

</>

    );

}
export default Skill;