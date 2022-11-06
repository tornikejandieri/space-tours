import { useEffect } from "react"
import { useState } from "react"
import { crew } from "./data.json"

const Crew = () => {
  const [index, setIndex] = useState(0)
  const { name, images, role, bio } = crew[index]

  function checkNum(num) {
    if (num > crew.length - 1) {
      return 0
    } else if (num < 0) {
      return crew.length - 1
    } else return num
  }

  function nextMember() {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNum(newIndex)
    })
  }

  function prevMember() {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNum(newIndex)
    })
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {nextMember()}, 3000)
  //   return () => clearInterval(interval)
  // }, [])

  return (
    <div className='crew'>
      <article>
        <div>02 MEET THE CREW</div>
        <div className='role-and-name'>
          <h3>{role}</h3>
          <h1>{name}</h1>
        </div>
        <div className='bio-container'>
          <p>{bio}</p>
        </div>
        <div className='image-container'>
          <img src='' alt='' />
        </div>
        <div className='button-container'>
          <button onClick={prevMember}>prev</button>
          <button onClick={nextMember}>next</button>
        </div>
      </article>
    </div>
  )
}

export default Crew
