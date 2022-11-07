import { useEffect, useState } from "react"
import { technology } from "./data.json"
import Loading from "./Loading"
import TechnologyComponent from "./TechnologyComponent"

const Technology = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tech, setTech] = useState(technology)

  useEffect(() => {
    const loadInterval = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearInterval(loadInterval)
  }, [])

  if (isLoading) {
    return <Loading />
  } else
    return (
      <div>
        {tech.map((techObjMember, index) => {
          return <TechnologyComponent key={index} {...techObjMember} />
        })}
      </div>
    )
}

export default Technology
