import React from "react"

interface ItemProps {
  category: string
}

const Item: React.FC<ItemProps> = ({ category }: ItemProps) => (
  <div className="flex items-center justify-center flex-auto h-64 mx-4 my-2 border border-black">
    <div className="flex flex-col items-center justify-center h-24 px-6 border border-black ">
      <div className="mb-2 text-2xl font-bold text-gray-900 ">
        {category.toUpperCase()}
      </div>
      <span className="text-xl font-light ">SHOP NOW</span>
    </div>
  </div>
)

const Home: React.FC = () => {
  return (
    <div className="container py-10 mx-auto text-4xl font-bold">
      <h1 className="mb-10 text-center">Welcome to my Homepage</h1>
      <div className="flex flex-wrap w-full">
        <div className="w-full md:w-1/3">
          <Item category="hat" />
        </div>
        <div className="w-full md:w-1/3">
          <Item category="jackets" />
        </div>
        <div className="w-full md:w-1/3">
          <Item category="shoes" />
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="w-full md:w-1/2">
          <Item category="womens" />
        </div>
        <div className="w-full md:w-1/2">
          <Item category="mens" />
        </div>
      </div>
    </div>
  )
}

export default Home
