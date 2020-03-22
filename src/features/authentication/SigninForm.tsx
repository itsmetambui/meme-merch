import React from "react"
import { useForm } from "react-hook-form"
import FormInput from "../../components/FormInput"
import CustomButton from "../../components/CustomButton"
import { signInWithGoogle } from "../../config/firebase"

const SigninForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data: Record<string, string>) => console.log(data)

  return (
    <div className="mt-4">
      <h2 className="mb-4 text-3xl font-bold">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
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

        <div className="flex flex-row mt-12">
          <CustomButton className="w-full mr-4 md:w-auto" type="submit">
            Sign in
          </CustomButton>
          <CustomButton
            className="w-full bg-blue-600 md:w-auto hover:border-blue-600 hover:text-blue-600"
            onClick={signInWithGoogle}
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SigninForm
