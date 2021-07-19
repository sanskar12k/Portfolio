import { Link } from "react-router-dom";
const Navbar = () => {
function openNav(){
    var x = document.getElementById("inks");
    if(x.style.display === "flex"){
        x.style.display = "none";
    }
    else{
    x.style.display = "flex";
    }
}
  
    return ( 
        <div className="all">
        <div   >
        <i class="fa fa-bars" onClick= {openNav}></i>
        <div id="inks" className="links">
            <Link to = "/Portfolio/">Home</Link>
            <Link to = "/Portfolio/Hobbies"> Hobbies</Link> 
            <Link to = "/Portfolio/Achivement"> Achievements</Link> 
            <Link to = "/Portfolio/Education">Education</Link> 
            <Link to = "/Portfolio/Skills">Skills</Link> 
            <Link to = "/Portfolio/Contact"> Contact </Link> 
           </div>
        </div>
        </div>
     );
}

export default Navbar
 