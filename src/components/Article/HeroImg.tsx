import heroImg from '../../../images/drawers.jpg';

export default function HeroImg(){
    return (
    <header className='b-header'>
        <img  className="b-header__hero" src={heroImg} alt="" />
    </header>)
}