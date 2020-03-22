import React from "react"

import "./FormInput.scss"

interface FormInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, ...inputProps }, ref) => (
    <div className="group">
      <input className="form-input" {...inputProps} ref={ref} />
      {label && (
        <label
          htmlFor={inputProps.name}
          className={`${inputProps.value ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  ),
)

export default FormInput
