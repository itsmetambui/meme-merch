import React from "react"

type CustomButton = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const CustomButton: React.FC<CustomButton> = ({ children, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={`${otherProps.className} w-auto h-16 px-12 text-sm font-bold tracking-wide text-white uppercase transition-all duration-300 bg-black border-none cursor-pointer min-w-40 hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black`}
    >
      {children}
    </button>
  )
}

export default CustomButton
