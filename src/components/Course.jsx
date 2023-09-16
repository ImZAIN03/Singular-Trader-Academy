import Disclaimer from "../course/Disclaimer"
import Program from "../course/Program"
import Questions from "../course/Questions"
import Training from "../course/Training"

const Course = () => {
  return (
    <div>
      <Training/>
      <Program/>
      <Questions/>
      <Disclaimer/>
    </div>
  )
}

export default Course