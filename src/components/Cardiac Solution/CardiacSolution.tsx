import caserImage from "../../assets/Images/carsevproimage.png"
import "./CardiacSolutionStyle.css"
const CardiacSolution = () => {
  return (
    <div className="container CardiacSolution-container">
      <div className="title-CardiacSolution">

      <h1 className="w-100 text-center">
        The All-in-One Solution

      </h1>
      </div>
      <div className="image-container">

      <img src={caserImage} alt="" />
      </div>
    </div>
  )
}

export default CardiacSolution
