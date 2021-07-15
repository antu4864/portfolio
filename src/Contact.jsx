import React from "react";
import PersonIcon from '@material-ui/icons/Person';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';



const Contact=()=>{
    return(
<>
<div className="container-fluid ">
        <div className="contact-main">
            
    <div className="contact ">
        <h1 className="con-h1">CONTACT_me</h1>
        <p>_____get in touch_____</p>
    </div>
    <div className="row d-flex justify-content-around align-items-center">
        <div className="col-lg-6 col-md-6 col-12">
            <h3 style={{textDecorationLine:"underline"}}>Get in touch</h3>
            <p style={{color:"#FF6F61"}}>Hi Everyone, I am Antu Kumar from Bihar, India. If you want to make own websits, contact me. </p>
            
          <div className="con_icon">
           <PersonIcon/> <p className= "con_p"> Antu Kumar</p>
          </div> <br />
          <div className="con_loc">
            <LocationOnIcon/>  <p className="con_p">Motihari,Bihar</p>
          </div> <br />
          <div className="con_mail">
            <EmailIcon/>  <p className="con_p">antu9649@gmail.com</p>
          </div>

        </div>
   { /* other coloum */}
        <div className="col-lg-6 col-md-6 col-12 ">
            <h3 style={{textDecorationLine:"underline"}}>Massage Me</h3><br />
            <div>
            <form  action="">
                <input type="text" placeholder="Name" className="form" /> <br /><br />
                <input type="Email" placeholder="Email" className="form"/> <br /><br />
                <input type="number" placeholder="Mobile No" className="form"/><br /><br />
                <input type="text"  placeholder="Subject" className="form"/><br /><br />
                <input type="text" placeholder="Massage" style={{width:"16rem"  , borderRadius:"10px"}}/><br /><br />
                <button className="btn btn-outline-success">Send Massage</button>
            </form>
            </div>
        </div>
       </div>

        </div>


 </div>
 <br /><br />
</>



    );
}
export default Contact;