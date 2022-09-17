import '../App.css'
import About from './About'
import Buttons from './Buttons'
import Footer from './Footer'
export default function Name(){
    return(
        <div className='name'>
            <h1>McKenna Peace</h1> 
            <h4>Full-stack web developer</h4>
            <a href='https://github.com/anvpeace'>Github</a>
            <div className='btnContainer'>
                <Buttons/>
            </div>
            <div>
            <About/> 
            <Footer/>


            </div>
        </div>
    )
}