import { useState } from 'react';
import avatar from '../../../images/avatar-michelle.jpg';
import share from '../../../images/icon-share.svg';

export default function Footer(){
    const [toggle, setToggle] = useState<boolean>(false);

    return( 
        <div className='b-footer'>
            {toggle && <div className='b-footer-modal'>
                <ul>
                    <li></li>
                </ul>
                <button className='b-footer__share' onClick={()=>setToggle(!toggle)}><img src={share} alt="" /></button>

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