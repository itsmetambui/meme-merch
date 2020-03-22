import React from "react"

import "./FormInput.scss"
import { FieldError } from "react-hook-form"

type FormInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string
  hasValue: boolean
  error?: FieldError | undefined
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, hasValue, ...inputProps }, ref) => {
    return (
      <div className="mb-8 group">
        <input className="form-input" {...inputProps} ref={ref} />
        {label && (
          <label
            htmlFor={inputProps.name}
            className={`${hasValue ? "shrink" : ""} form-input-label`}
          >
            {label}
          </label>
        )}
        {error && <span className="text-sm text-red-500">{error.message}</span>}
      </div>
    )
  },
)

export default FormInput
