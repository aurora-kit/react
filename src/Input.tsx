/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { forwardRef } from 'react'
import Loader from './Loader'

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      onClear,
      isClearable,
      loading,
      children,
      hasValue,
      placeholder,
      ...props
    },
    ref
  ) => {
    return (
      <label css={wrapperStyle}>
        <p css={labelStyle}>
          {label}
          {error ? (
            <span
              css={css`
                ${textStyle}
                color: #ff3b57
              `}
            >
              {error}
            </span>
          ) : null}
        </p>

        <input
          ref={ref}
          css={inputStyle}
          placeholder={placeholder}
          {...props}
        />

        {children}

        {isClearable && !loading ? (
          <button
            type="button"
            onClick={onClear}
            css={clearStyles}
            disabled={!hasValue}
          >
            <svg
              viewBox="0 0 20 20"
              aria-hidden="true"
              focusable="false"
              fill="currentColor"
            >
              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z" />
            </svg>
          </button>
        ) : null}
        {loading ? <Loader /> : null}
      </label>
    )
  }
)

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  placeholder?: string
  // style: React.CSSProperties
  error?: boolean
  onClear?: () => void
  isClearable?: boolean
  loading?: boolean
  hasValue?: boolean
}

export default Input

const wrapperStyle = css`
  position: relative;
  display: block;
  margin-bottom: 10px;
`

const labelStyle = css`
  position: relative;
  margin: 0;
  font-size: 14px;
  letter-spacing: -0.25px;
  font-weight: var(--f-heavy);
  padding-left: 0.7em;
  padding-right: 0.7em;
  margin-bottom: 0.3em;
`
const textStyle = css`
  position: absolute;
  right: 18px;
  bottom: 0;
  font-size: 0.7em;
  max-width: 55%;
  text-align: right;
  text-shadow: none;
  color: #b4b4b4;
`
const inputStyle = css`
  border: 1px solid #eae0de;
  width: 100%;
  min-height: 48px;
  background-color: hsl(0, 0%, 100%);
  border-color: transparent;
  border-style: solid;
  border-width: 1px;
  color: #141520;
  font-size: inherit;
  border-radius: 2em;
  transition: color 0.3s, background 0.3s;
  outline: 0;
  line-height: 1;
  padding: 13.5px 20px;
  background: #f1f1f3;

  &::placeholder {
    color: #9a9ba4;
  }
  &:focus::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
  &:focus {
    background-color: #fff;
    border-color: var(--c-dark-blue);
    box-shadow: 0 0 0 4px #f1f1f3;
  }
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
