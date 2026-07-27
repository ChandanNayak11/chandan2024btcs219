import { details } from "../data/Data"
import { useNavigate } from "react-router-dom"



const HomePage = () => {
  const user = details[0]
  const navigate = useNavigate()


  return (
    <div className="home-container">
        <div className="container">
            <h1>Welcome!</h1>
            
            <p> Hii, I am {user.name} </p>
            <div className="flex">
            <p>{user.shortBio}</p>
            <img src="" alt="img1" />
            </div>

            <button className="button" onClick={ () => navigate("/About")}> Know More </button>
        </div>
    </div>
  )
}

export default HomePage