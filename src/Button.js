import './App.css';
import { Link } from 'react-router-dom';

const Button = ({id,content,destination}) => {
    return(
        <>
            <Link id={id} content={content} className="button" href ="#"  to={destination}>{content}</Link>
        </>
    )
}

export default Button;