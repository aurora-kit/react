/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { Fragment, forwardRef } from 'react'

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      error,
      onClear,
      isClear,
      loading,
      children,
      hasValue,
      placeholder,
      name,
      value,
      isCheckbox,
      ...props
    },
    ref
  ) => {
    const namespace = `${name}_${value}`
    return isClear ? (
      <button type="button" onClick={onClear} css={clearStyles}>
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          focusable="false"
          fill="currentColor"
        >
          <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z" />
        </svg>
      </button>
    ) : (
      <Fragment>
        <input
          css={checkboxStyles}
          id={namespace}
          ref={ref}
          name={name}
          type={isCheckbox ? 'checkbox' : 'radio'}
          {...props}
        />
        <label htmlFor={namespace} css={labelStyle}>
          <div
            css={css`
              ${boxStyle}
              ${isCheckbox ? `border-radius: 4px;` : ''}
            `}
          >
            {isCheckbox ? (
              <svg viewBox="0 0 16 16" css={svgStyle} className="isCheckbox">
                <path
                  fillRule="evenodd"
                  fill="currentColor"
                  d="M2.132 6.75l3.697 3.026 7.537-8.85a1.206 1.206 0 011.703-.135c.482.412.558 1.125.195 1.631L7.422 13.29 6.189 15 4.84 13.47.458 8.494A1.216 1.216 0 01.564 6.78a1.21 1.21 0 011.568-.03z"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 100 100" css={svgStyle}>
                <circle cx="50" cy="50" r="38" fill="currentColor" />
              </svg>
            )}
          </div>
          <span css={valueStyle}>{children}</span>
        </label>
      </Fragment>
    )
  }
)

export type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  placeholder?: string
  // style: React.CSSProperties
  error?: boolean
  onClear?: () => void
  isClear?: boolean
  isCheckbox?: boolean
  loading?: boolean
  hasValue?: boolean
  name: string
}

export default Radio

const checkboxStyles = css`
  display: none;
  &:checked + label > div > svg {
    opacity: 1;
  }
  &:checked + label div {
    background-color: transparent;
  }
  &:checked + label .isCheckbox,
  &:not(:checked) + label:hover div {
    border-color: transparent;
  }
`
const boxStyle = css`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: 1px solid #c3c3c3;
  border-radius: 1000px;
  transition: background-color 0.3s;
`

const labelStyle = css`
  display: inline-flex;
  align-items: center;
  margin-right: 1em;
  cursor: pointer;
  user-select: none;
  margin-bottom: 0;
  &:hover div {
    background-color: #e2e3e7;
  }
`
const svgStyle = css`
  opacity: 0;
`
const valueStyle = css`
  display: inline-block;
  margin-left: 0.5em;
  vertical-align: middle;
`
const clearStyles = css`
  border: 0;
  background: none;
  padding: 0;
  width: 20px;
  height: 20px;
  opacity: 0.5;
  transition: opacity 0.3s;
  cursor: pointer;
  position: absolute;
  right: 1em;
  top: calc(50% + 2px);

  &:hover {
    opacity: 1;
  }
  &:disabled {
    pointer-events: none;
  }
`
