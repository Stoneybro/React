import facebook from './FacebookIcon.svg'
import github from './GitHubIcon.svg'
import twitter from './TwitterIcon.svg'
import instagram from './InstagramIcon.svg'
export default function Footer(){
    return(
        <div className='footer'>
            <img src={facebook} alt="" />
            <img src={github} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
        </div>
    )
}