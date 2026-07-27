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

            <div className="hero">
            <div className="flex">
            <p> Hii, I am {user.name} </p>
            <p>{user.shortBio}</p>
            <button className="button" onClick={ () => navigate("/About")}> Know More </button>
            </div>
            <img src="https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e1377d4/_orig/pixomatic_1572877223091.png" alt="img1" />
            </div>
            

            
        </div>
    </div>
  )
}

export default HomePage