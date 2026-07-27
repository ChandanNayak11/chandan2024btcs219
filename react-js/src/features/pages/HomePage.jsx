import { details } from "../data/Data"


const HomePage = () => {
  const user = details[0]
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