import React, { useState } from "react"
import MenuItem from "./MenuItem"

const Home: React.FC = () => {
  const [sections] = useState([
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
    },
  ])

  return (
    <div className="container py-10 mx-auto text-4xl font-bold">
      <h1 className="mb-10 text-center">Welcome to my Homepage</h1>
      <div className="flex flex-wrap w-full">
        {sections.map(section => (
          <div
            key={section.id}
            className={`w-full md:${
              section.size === "large" ? "w-1/2" : "w-1/3"
            }`}
          >
            <MenuItem {...section} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
