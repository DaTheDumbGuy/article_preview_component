import { useState } from 'react';
import avatar from '../../../images/avatar-michelle.jpg';
import share from '../../../images/icon-share.svg';
import FacebookIcon from '../../../images/icon-facebook.svg';
import TwitteIcon from '../../../images/icon-twitter.svg';
import PinterestIcon from '../../../images/icon-pinterest.svg';
export default function Footer(){
    const [toggle, setToggle] = useState<boolean>(false);

    return( 
        <div className='b-footer'>
            {toggle && <div className='b-footer-modal'>
                <ul className='b-footer-modal-links'>
                    <li>Share</li>
                    <li><img src={FacebookIcon} alt="" /></li>
                    <li><img src={TwitteIcon} alt="" /></li>
                    <li><img src={PinterestIcon} alt="" /></li>
                </ul>
                <button className='b-footer__share modal' onClick={()=>setToggle(!toggle)}><img src={share} alt="" /></button>

            </div>}
            <img className="b-footer__image" src={avatar} alt="" />
            <div className='b-footer-description'>
                <h2 className='b-footer-description__name'>Michelle Appleton</h2>
                <p className='b-footer-description__date'>28 Jun 2020</p>
            </div>
            <button className='b-footer__share' onClick={()=>setToggle(!toggle)}><img src={share} alt="" /></button>
        </div>
    )
}