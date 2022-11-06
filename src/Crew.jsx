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
  // this function is idle but it still exists in case you want to use it in future lol
  function prevMember() {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNum(newIndex)
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextMember()
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='crew'>
      <article className='crew-content'>
        <div className='role-and-name'>
          <h2>02 MEET THE CREW</h2>
          <h3>{role}</h3>
          <h1>{name}</h1>
          <div className='bio'>
            <p>{bio}</p>
          </div>
        </div>
        <div className='crew-image-container'>
          <img src={images.png} alt='' />
        </div>
      </article>
    </div>
  )
}

export default Crew
