import React from "react"
import { useForm } from "react-hook-form"
import FormInput from "../../components/FormInput"

const SigninForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data: Record<string, string>) => console.log(data)

  return (
    <div className="">
      <h2 className="mb-4 text-3xl font-bold">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form className="mt-16" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          name="email"
          ref={register({ required: true })}
          label="Email"
        />
        {errors.email && <span>This field is required</span>}

        <FormInput
          type="password"
          name="password"
          ref={register({ required: true })}
          label="Password"
        />
        {errors.password && <span>This field is required</span>}

        <input type="submit" value="Submit Form" />
      </form>
    </div>
  )
}

export default SigninForm
