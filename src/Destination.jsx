import { useState } from "react"
import { destinations } from "./data.json"
import { FcNext } from "react-icons/fc"
import { FcPrevious } from "react-icons/fc"
import StyledLine from "./StyledLine"

const Destination = () => {
  const [index, setIndex] = useState(0)
  const { name, images, description, distance, travel } = destinations[index]

  function checkNum(num) {
    if (num > destinations.length - 1) {
      return 0
    } else if (num < 0) {
      return destinations.length - 1
    } else return num
  }

  function nextPlanet() {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNum(newIndex)
    })
  }

  function prevPlanet() {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNum(newIndex)
    })
  }

  return (
    <div className='destination'>
      <article className='destination-content'>
        <button onClick={prevPlanet}>
          <FcPrevious size={40} />
        </button>
        <div className='image-container'>
          <h2>01 PICK YOUR DESTINATION</h2>
          <img src={images.png} alt='' />
        </div>
        <div className='text-container'>
          <p
            style={{
              fontFamily: "bellefair",
              fontSize: "140px",
              marginBottom: "40px",
              marginTop: "90px",
              color: "#fff",
            }}
          >
            {" "}
            {name}
          </p>

          <span>
            {description} <StyledLine />
          </span>

          <div className='travel-details'>
            <p>
              AVRG. DISTANCE <br />
              {distance}
            </p>
            <p>
              EST. TAVEL TIME <br />
              {travel}
            </p>
          </div>
        </div>

        <button onClick={nextPlanet}>
          <FcNext size={40} />
        </button>
      </article>
    </div>
  )
}

export default Destination
