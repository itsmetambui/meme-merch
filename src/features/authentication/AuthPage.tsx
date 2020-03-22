import React from "react"

import SigninForm from "./SigninForm"
import SignupForm from "./SignupForm"

const AuthPage: React.FC = () => {
  return (
    <div className="flex flex-wrap px-48 -mx-12">
      <div className="w-full px-12 md:w-1/2">
        <SigninForm />
      </div>
      <div className="w-full px-12 md:w-1/2">
        <SignupForm />
      </div>
    </div>
  )
}

export default AuthPage
