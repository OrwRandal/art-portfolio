import { Link, useLocation } from "react-router-dom"
const Footer = () => {
    let location = useLocation();
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <footer>
            <div id="foot-nav">
                <Link to='/'>
                    <p className={location.pathname === '/'? 'currentFootNav': ''} onClick={handleClick}>Home</p>
                </Link>
                <Link to='/originals'>
                    <p className={location.pathname === '/originals'? 'currentFootNav': ''} onClick={handleClick}>Originals</p>
                </Link>
                <Link to='/fanArt'>
                    <p className={location.pathname === '/fanArt'? 'currentFootNav': ''} onClick={handleClick}>Fan Art</p>
                </Link>
                <Link to='/portraits'>
                    <p className={location.pathname === '/portraits'? 'currentFootNav': ''} onClick={handleClick}>Portraits</p>
                </Link>
            </div>
            <div>
                <p>Copyright© Randy Pichardo</p>
            </div>
        </footer>
    )
}

export default Footer
