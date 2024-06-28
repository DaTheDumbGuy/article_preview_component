import avatar from '../../../images/avatar-michelle.jpg';
import share from '../../../images/icon-share.svg';

export default function Footer(){
    return( 
        <div className='b-footer'>
            <img className="b-footer__image" src={avatar} alt="" />
            <div className='b-footer-description'>
                <h2 className='b-footer-description__name'>Michelle Appleton</h2>
                <p className='b-footer-description__date'>28 Jun 2020</p>
            </div>
            <button className='b-footer__share'><img src={share} alt="" /></button>
        </div>
    )
}