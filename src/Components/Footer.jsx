import { Link, useLocation } from "react-router-dom"
const Footer = () => {
    let location = useLocation();
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <footer>
            <div id="foot-nav">
                <Link to='/art-portfolio/'>
                    <p className={location.pathname === '/art-portfolio/'? 'currentFootNav': ''} onClick={handleClick}>Home</p>
                </Link>
                <Link to='/art-portfolio/originals'>
                    <p className={location.pathname === '/art-portfolio/originals'? 'currentFootNav': ''} onClick={handleClick}>Originals</p>
                </Link>
                <Link to='/art-portfolio/fanArt'>
                    <p className={location.pathname === '/art-portfolio/fanArt'? 'currentFootNav': ''} onClick={handleClick}>Fan Art</p>
                </Link>
                <Link to='/art-portfolio/portraits'>
                    <p className={location.pathname === '/art-portfolio/portraits'? 'currentFootNav': ''} onClick={handleClick}>Portraits</p>
                </Link>
            </div>
            <div>
                <p>Copyright© Randy Pichardo</p>
            </div>
        </footer>
    )
}

export default Footer
