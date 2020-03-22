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
  const { register, handleSubmit, getValues, watch, errors } = useForm<
    FormData
  >()
  const onSubmit = (data: FormData) => console.log(data)

  return (
    <div className="mt-4">
      <h2 className="mb-4 text-3xl font-bold">I don't have an account</h2>
      <span>Sign up with your email and password.</span>

      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="text"
          name="displayName"
          hasValue={!!watch("displayName")}
          ref={register({
            required: { value: true, message: "Display Name is required" },
          })}
          label="Display Name"
          error={errors.displayName}
        />

        <FormInput
          type="email"
          name="email"
          hasValue={!!watch("email")}
          ref={register({
            required: { value: true, message: "Email is required" },
          })}
          label="Email"
          error={errors.email}
        />

        <FormInput
          type="password"
          name="password"
          hasValue={!!watch("password")}
          ref={register({
            required: { value: true, message: "Password is required" },
          })}
          label="Password"
          error={errors.password}
        />

        <FormInput
          type="password"
          name="confirmPassword"
          hasValue={!!watch("confirmPassword")}
          ref={register({
            required: { value: true, message: "Confirm Password is required" },
            validate: value => {
              if (value === getValues()["password"]) {
                return true
              } else {
                return "The passwords do not match"
              }
            },
          })}
          label="Confirm Password"
          error={errors.confirmPassword}
        />

        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </div>
  )
}

export default SigninForm
