import { useState } from 'react';
import avatar from '../../../images/avatar-michelle.jpg';
import share from '../../../images/icon-share.svg';
import Links from './Links';


export default function ArticleFooter(){
    const [toggle, setToggle] = useState<boolean>(false);

    return( 
        <div className='b-footer'>
            {toggle && <Links toggle={toggle} setToggle={setToggle}/>}
            <img className="b-footer__image" src={avatar} alt="" />
            <div className='b-footer-description'>
                <h2 className='b-footer-description__name'>Michelle Appleton</h2>
                <p className='b-footer-description__date'>28 Jun 2020</p>
            </div>
            <button className='b-footer__share' onClick={()=>setToggle(!toggle)}><img src={share} alt="" /></button>
        </div>
    )
}