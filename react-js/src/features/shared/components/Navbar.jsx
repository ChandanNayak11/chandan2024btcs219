import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar-container">

      <h1>Chandan Kumar Nayak</h1>

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