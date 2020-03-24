import React from "react"
import MenuItem from "./MenuItem"

// TODO: replace with tailwind and styled-component
import data from "../../config/shop-data"

const HomePage: React.FC = () => {
  return (
    <div className="container py-10 mx-auto text-4xl font-bold">
      <div className="flex flex-wrap w-full">
        {data.sections.map(section => (
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

export default HomePage