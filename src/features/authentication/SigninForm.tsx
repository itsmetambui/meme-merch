import React from "react"
import { useForm } from "react-hook-form"
import FormInput from "../../components/FormInput"
import CustomButton from "../../components/CustomButton"
import { signInWithGoogle, auth } from "../../config/firebase"

type FormData = {
  email: string
  password: string
}

const SigninForm: React.FC = () => {
  const { register, handleSubmit, errors, watch, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    const { email, password } = data
    try {
      await auth.signInWithEmailAndPassword(email, password)
      reset()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="mt-4">
      <h2 className="mb-4 text-3xl font-bold">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
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

        <div className="flex flex-row mt-12">
          <CustomButton className="w-full mr-4 md:w-auto" type="submit">
            Sign in
          </CustomButton>
          <CustomButton color="blue" className="w-full md:w-auto" onClick={signInWithGoogle}>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SigninForm
