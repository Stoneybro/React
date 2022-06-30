import image from './Rectangle90.png'
import linkedin from './Vector.svg'
import email from './Icon.svg'
export default function Profile(){
    return(
        <div className='profile'>
            <img src={image} alt="" />
            <h1>Laura Smith</h1>
            <h4>Frontend developer</h4>
            <p>laurasmith.website</p>
            <div className='profile-buttons'><button><img src={email} alt="" /><span>Email</span></button><button className='linkedin'><img src={linkedin} alt="" /><span>Linkedin</span></button></div>
        </div>
    )
}