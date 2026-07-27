import { details } from "../data/Data"
import { useNavigate } from "react-router-dom"
import '../styles/homepage.css'



const HomePage = () => {
  const user = details[0]
  const navigate = useNavigate()


  return (
    <div className="home-container">
        <div className="container">
            <h1>Welcome!</h1>
            <div className="flex">
            <p> Hii, I am {user.name} </p>
            <p>{user.shortBio}</p>
            </div>
            <img src="" alt="img1" />
            

            <button className="button" onClick={ () => navigate("/About")}> Know More </button>
        </div>
    </div>
  )
}

export default HomePage