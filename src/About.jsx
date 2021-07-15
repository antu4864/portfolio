import React from "react";
import web from './image/web.png';


const About =()=>{
    return(

<>
<div className="container-fluid main">
<div className="row">
     <div className="col-lg-4 col-md-6  col-12 ">
    <img src={web} alt="antu" className="img-fluid abimg" />
    </div>

    
    <div  className="col-lg-8 col-md-6  col-12  ">
   <div className="about_p">
        <h3 className="text-center">Know Who <span style={{color: "#00ff00"}}>  I'M </span></h3>
        <p style={{fontSize:"1.4rem"}}>  Hi Everyone, I am <span style={{color: "#00ff00", fontSize:"2rem"}}>  Antu Kumar </span> from Bihar, India. <br/><br/>
  
        I have studied hard to become a well qualified Web Developer specialist. <br />   
       I am eager to implement what I have learned in a practical and impactful manner. <br />
       I completed a challenging internship with the dimension.com in the Web development department and have holiday work experience with The dimension. <br/><br/>
       
       Apart from coding, some other activities that I love to do!<br/><br/>

 - Playing Games<br/>
 - Photo Editing<br/>
 
 - Travelling    </p>
   </div>
    </div>
    </div>



  
</div>

<br /><br />
</>

    );

}
export default About;