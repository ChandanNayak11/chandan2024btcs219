import { NavLink } from "react-router-dom"
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar-container">

      <h2>Chandan Kumar Nayak</h2>

      <nav>
        <NavLink to="/" end >
        <span>Home</span>
        </NavLink>

        <NavLink to="/About">
        <span>About</span>
        </NavLink>

        <NavLink to="/Contact">
        <span>Contact</span>
        </NavLink>
      </nav>

      <p>Full Stack Developer</p>


    </div>
  )
}

export default Navbar