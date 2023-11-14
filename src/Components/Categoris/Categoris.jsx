import { useState } from "react"
import './Categoris.css'

const Categoris = ({chooseCategoy}) => {
  const [categoris, setCategoris] = useState([
    {
      key: "all",
      name: "all"
    },
    {
      key: "vodka",
      name: "vodka"
    },
    {
      key: "jucy",
      name: "jucy"
    },
    {
      key: "coctel",
      name: "coctel"
    },
    {
      key: "fresh",
      name: "fresh"
    },
    {
      key: "beer",
      name: "beer"
    },
    {
      key: "wisski",
      name: "wisski"
    },
  ])

  return(
    <div className="categoris">
        {
          categoris.map((el) => {
            return(
              <div key={el.key} onClick={ () => chooseCategoy(el.key)}>
                <p>{el.name}</p>
              </div>
            )
          })
        }
    </div>
  )
} 

export default Categoris