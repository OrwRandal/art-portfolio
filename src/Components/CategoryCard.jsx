import { Link } from 'react-router-dom'
const CategoryCard = ({ img, title, path }) => {
    return (
        <div style={{backgroundImage:`url(${img})`}} className='card'>
            <Link to={path} className='cardTitle' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <h2>{title}</h2>
            </Link>
        </div>
    )
}

export default CategoryCard
