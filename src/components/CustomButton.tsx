import React, { forwardRef } from "react"
import styled from "styled-components"

interface ButtonExtraProps {
  readonly variant?: "text" | "contained"
  readonly color?: "black" | "blue"
}

type CustomButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonExtraProps

const theme: { [key: string]: any } = {
  black: {
    text: {
      color: "black",
      backgroundColor: "white",
      border: "1px solid black",
      hover: {
        color: "white",
        backgroundColor: "black",
        border: "1px solid black",
      },
    },
    contained: {
      color: "white",
      backgroundColor: "black",
      border: "1px solid black",
      hover: {
        color: "black",
        backgroundColor: "white",
        border: "1px solid black",
      },
    },
  },
  blue: {
    text: {
      color: "#3182ce",
      backgroundColor: "white",
      border: "1px solid #3182ce",
      hover: {
        color: "white",
        backgroundColor: "#3182ce",
        border: "1px solid #3182ce",
      },
    },
    contained: {
      color: "white",
      backgroundColor: "#3182ce",
      border: "1px solid #3182ce",
      hover: {
        color: "#3182ce",
        backgroundColor: "white",
        border: "1px solid #3182ce",
      },
    },
  },
}

const generateStyle = ({ color = "black", variant = "contained" }) =>
  theme[color][variant]

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  (props, ref) => {
    return (
      <StyledButton
        {...props}
        ref={ref}
        className={`w-auto h-16 px-12 text-sm font-bold tracking-wide uppercase transition-all duration-300 cursor-pointer min-w-40 ${props.className}`}
      />
    )
  },
)

const StyledButton = styled.button<ButtonExtraProps>`
  color: ${props => generateStyle(props).color};
  background-color: ${props => generateStyle(props).backgroundColor};
  border: ${props => generateStyle(props).border};

  :hover {
    color: ${props => generateStyle(props).hover.color};
    background-color: ${props => generateStyle(props).hover.backgroundColor};
    border: ${props => generateStyle(props).hover.border};
  }
`

export default CustomButton
