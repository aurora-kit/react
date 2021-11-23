/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { forwardRef, Fragment } from 'react'
import {
  wrapperStyle,
  labelStyle,
  textStyle,
  inputStyle,
  clearStyles,
} from './Input'
import Loader from './Loader'

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      onClear,
      isClearable,
      loading,
      hasValue,
      placeholder,
      ...props
    },
    ref
  ) => {
    return (
      <label css={wrapperStyle}>
        <p css={labelStyle}>
          {label ? (
            label
          ) : !label && hasValue ? (
            placeholder
          ) : (
            <Fragment>&nbsp;</Fragment>
          )}
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

        <textarea
          ref={ref}
          css={textareaStyle}
          placeholder={placeholder}
          {...props}
        />

        {isClearable && !loading ? (
          <button
            type="button"
            onClick={onClear}
            css={taClearStyle}
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

export type TextareaProps = React.InputHTMLAttributes<HTMLTextAreaElement> & {
  label?: string
  placeholder?: string
  // style: React.CSSProperties
  error?: boolean
  onClear?: () => void
  isClearable?: boolean
  loading?: boolean
  hasValue?: boolean
}

export default Textarea

const textareaStyle = css`
  ${inputStyle}
  font: inherit;
  min-height: 100px;
`

const taClearStyle = css`
  ${clearStyles}
  top: 2.8em
`
