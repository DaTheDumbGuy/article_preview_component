import FacebookIcon from '../../../images/icon-facebook.svg';
import TwitteIcon from '../../../images/icon-twitter.svg';
import PinterestIcon from '../../../images/icon-pinterest.svg';
import share from '../../../images/icon-share.svg';

interface Toggle{
    toggle:boolean,
    setToggle: React.Dispatch<React.SetStateAction<boolean>>,

}

export default function Links({toggle, setToggle}:Toggle){
    return(<div className='b-footer-toggle'>
        <ul className='b-footer-toggle__links'>
            <li>Share</li>
            <li><img src={FacebookIcon} alt="" /></li>
            <li><img src={TwitteIcon} alt="" /></li >
            <li><img src={PinterestIcon} alt="" /></li>
        </ul>
        <button className='b-footer__share' onClick={()=>setToggle(!toggle)}><img src={share} alt="" /></button>
    </div>
    )
}