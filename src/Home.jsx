import React from "react";
import image from './image/image.png';
import Typewriter from "typewriter-effect";




const Home =()=>{

  
    return(
      

<>


<div className="container-fluid main ">
    
<div className="row">
      <div className="col-lg-6 col-md-6 col-12 ">
    <div className="home">
      <p>Hey Everyone <br/>I am &ensp;
      <span style={{color:"#00ffff"}}>Antu Kumar</span></p>
    <Typewriter
  options={{
    strings: ["<span style=color:red; >Web Developer</span>" ,
              '<span style=color:yellow; >Freelancer</span>' , 
              "<span style=color:green; >Designer</span>"],
    autoStart: true,
    loop: true,
  }}
/>
      </div> 
      </div>
     
      <div  className="col-lg-6 col-md-6 col-12  ">
    <img src={image} alt="antu" className="img img-fluid"/>
    </div>
    </div>
         
       

    
</div>
       





</>

    );

}
export default Home;