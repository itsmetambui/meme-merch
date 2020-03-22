import React from "react"

import "./FormInput.scss"
import { NestDataObject } from "react-hook-form"

interface FormInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string
  error?: NestDataObject<Record<string, any>>
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, ...inputProps }, ref) => (
    <div className="mb-8 group">
      <input className="form-input" {...inputProps} ref={ref} />
      {label && (
        <label
          htmlFor={inputProps.name}
          className={`${inputProps.value ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      )}
      {error && (
        <span className="text-sm text-red-500">This field is required</span>
      )}
    </div>
  ),
)

export default FormInput
