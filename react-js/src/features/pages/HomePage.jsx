import { details } from "../data/Data"


const HomePage = () => {
  return (
    <div className="home-container">
        <div className="container">
            <h1>Welcome!</h1>

            <p> I am {details.name} </p>
        </div>
    </div>
  )
}

export default HomePage