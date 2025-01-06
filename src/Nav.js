import { Link} from "react-router-dom";


const Nav = () => {
    return(
        <div className="navitems">
          <ul>
            <li><Link to="/#header" aria-label="Home">Home</Link></li>
            <li><Link to="/#about"aria-label="About us">About</Link></li>
            <li><Link to="/#highlights" aria-label="Menu">Menu</Link></li>
            <li><Link to="/bookingpage" aria-label="Reservations">Reservation</Link></li>
            <li><Link to="#">Order Online</Link></li>
            <li><Link to="#">Login</Link></li>
          </ul>
        </div>
      );
};


export default Nav;