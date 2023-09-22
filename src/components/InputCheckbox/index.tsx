import classNames from "classnames"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"
import { check } from "prettier"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
        onClick={() => onChange(!checked)}
      />
      <input
        title="checkbox"
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        readOnly
        disabled={disabled}
      />
    </div>
  )
}
