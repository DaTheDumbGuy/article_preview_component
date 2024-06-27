import avatar from '../../../images/avatar-michelle.jpg';
import share from '../../../images/icon-share.svg';

export default function Footer(){
    return( 
        <div>
            <img src={avatar} alt="" />
            <div>
                <h2>Michelle Appleton</h2>
                <p>28 Jun 2020</p>
            </div>
            <button><img src={share} alt="" /></button>
        </div>
    )
}