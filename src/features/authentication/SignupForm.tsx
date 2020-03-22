import React from "react"
import { useForm } from "react-hook-form"
import FormInput from "../../components/FormInput"
import CustomButton from "../../components/CustomButton"

type FormData = {
  displayName: string
  email: string
  password: string
  confirmPassword: string
}

const SigninForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<FormData>()
  const onSubmit = (data: FormData) => console.log(data)

  return (
    <div className="mt-4">
      <h2 className="mb-4 text-3xl font-bold">I don't have an account</h2>
      <span>Sign up with your email and password.</span>

      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="text"
          name="displayName"
          ref={register({ required: true })}
          label="Display Name"
          error={errors.displayName}
        />

        <FormInput
          type="email"
          name="email"
          ref={register({ required: true })}
          label="Email"
          error={errors.email}
        />

        <FormInput
          type="password"
          name="password"
          ref={register({ required: true })}
          label="Password"
          error={errors.password}
        />

        <FormInput
          type="password"
          name="confirmPassword"
          ref={register({ required: true })}
          label="Confirm Password"
          error={errors.confirmPassword}
        />

        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </div>
  )
}

export default SigninForm
