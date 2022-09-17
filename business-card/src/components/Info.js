import Profile from './supporter.png' 
import '../App.css'
import Name from './Name'
export default function Info(){
    return(
        <div className='info-cont'>
            <img src={Profile} alt="McKenna Peace"/>
            <div className='nameContainer'>
                <Name/>
            </div>
        </div>
    )
}