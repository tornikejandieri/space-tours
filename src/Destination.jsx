import { useState } from 'react';
import {destinations} from './data.json'

const Destination = () => {
  const [index, setIndex] = useState(0)
  const {name, images, png, description, distance, travel} = destinations[index]

  function checkNum(num){
    if(num > destinations.length - 1){
      return 0
    } else if(num < 0){
      return destinations.length - 1
    } else return num
  }

  function nextPlanet(){
    setIndex((index) => {
      let newIndex = index + 1
      return checkNum(newIndex)
    })
  }

  function prevPlanet(){
    setIndex((index) => {
      let newIndex = index - 1
      return checkNum(newIndex)
    })
  }

  return ( 
    <div className="destination">
      <article>
      <div>PICK YOUR DESTINATION</div>
        <div className="image-container">
        <img src='' alt="" />
        </div>
        <div>
          <h1>{name}</h1>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div>
          <p>AVRG. DISTANCE <br />{distance}</p>
          <p>EST. TAVEL TIME <br />{travel}</p>
        </div>
        <div className="button-container">
          <button onClick={prevPlanet}>prev</button>
          <button onClick={nextPlanet}>next</button>
        </div>
      </article>

    </div>
   );
}
 
export default Destination;