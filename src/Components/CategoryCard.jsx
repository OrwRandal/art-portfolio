import { Link } from 'react-router-dom'
const CategoryCard = ({ img, title, path }) => {
    return (
        <Link to={path} style={{backgroundImage:`url(${img})`}} className='card' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className='cardTitle'>
                <h2>{title}</h2>
            </div>
        </Link>
    )
}

export default CategoryCard
