import React from "react"
import { useForm } from "react-hook-form"
import FormInput from "../../components/FormInput"
import CustomButton from "../../components/CustomButton"
import { auth, createUserProfileDocument } from "../../config/firebase"

type FormData = {
  displayName: string
  email: string
  password: string
  confirmPassword: string
}

const SigninForm: React.FC = () => {
  const { register, handleSubmit, getValues, watch, errors, reset } = useForm<FormData>()
  const onSubmit = async (data: FormData) => {
    const { displayName, email, password } = data
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName })
      reset()
    } catch (error) {
      console.error(error)
    }
  }

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
            min: {
              value: 6,
              message: "Password should has at least 6 characters",
            },
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
            min: {
              value: 6,
              message: "Password should has at least 6 characters",
            },
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
