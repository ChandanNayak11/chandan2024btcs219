import { details } from "../data/Data"


const HomePage = () => {
  return (
    <div className="home-container">
        <div className="container">
            <h1>Welcome!</h1>

            <p> Hii, I am {details.name} </p>
            <p>{details.shortBio}</p>
        </div>
    </div>
  )
}

export default HomePage