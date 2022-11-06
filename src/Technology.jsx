import { useState } from "react"
import { technology } from "./data.json"
import TechnologyComponent from "./TechnologyComponent"

const Technology = () => {
  const [tech, setTech] = useState(technology)

  return (
    <div>
      {tech.map((techObjMember) => {
        return (
          <TechnologyComponent
            key={new Date().getTime().toString()}
            {...techObjMember}
          />
        )
      })}
    </div>
  )
}

export default Technology
