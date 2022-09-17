import '../App.css'
import Twitter from "./twitter.png"
import Instagram from "./instagram.png"
import Facebook from "./facebook.png"
import Github from "./github.png"


export default function Footer(){
    return(
        <div className='footContainer'>
            <i><img id='twitter' src={Twitter} alt="twitter icon"></img></i>  
            <i><img id='instagram' src={Instagram} alt="instagram icon"></img></i>  
            <i><img id='facebook' src={Facebook} alt="instagram icon"></img></i>  
            <i><img id='github' src={Github} alt="instagram icon"></img></i>  


        </div>
    )
}
