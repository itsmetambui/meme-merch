import React from "react"
import { render } from "@testing-library/react"
import Home from "./HomePage"

describe("Home component", () => {
  test("renders welcome", () => {
    const { getByText } = render(<Home />)
    const linkElement = getByText(/welcome to my homepage/i)
    expect(linkElement).toBeInTheDocument()
  })
})
