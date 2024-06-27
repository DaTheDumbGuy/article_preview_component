import Footer from "./Footer";
import HeroImg from "./HeroImg";
import Main from "./Main";

export default function Article(){
    return(
        <article className="b-article">
            <HeroImg/>
            <Main/>
            <Footer/>
        </article>
    )
}