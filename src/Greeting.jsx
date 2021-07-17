import React from "react";

function Greeting(){
    
//var name = prompt("Please Enter Your Name");

let curdate= new Date();
curdate = curdate.getHours();
let greeting = " ";
const cstyle ={ };

if (curdate>=1 && curdate <12)
{
  greeting = "Good Morning";
  cstyle.color="green";
}
else if(curdate>=12 && curdate<19)
{
  greeting="Good Evening ";
  cstyle.color="orange";
}
else{
  greeting="Good Night";
  cstyle.color="black";
}
return(
    <>
    <div>
        <h2 className="greeting"><span style={{color:"pink"}}>Hello, </span><span style={cstyle}>{greeting}</span></h2>
    </div>
    </>
);
 }
export default Greeting;