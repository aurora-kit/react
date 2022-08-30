/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { css as rawCss } from '@emotion/css'
import { forwardRef, useState, useRef } from 'react'
import Loader from './Loader'
import { useOnClickOutside } from './hooks'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, loading, inverted, disabled, animated, ...props }, ref) => {
    return (
      <button
        css={css`
          ${buttonStyles}
          ${inverted ? invertedStyles : ''}
        `}
        disabled={loading || disabled}
        ref={ref}
        {...props}
      >
        <span
          css={css`
            ${contentStyles}
            opacity: ${loading ? 0 : 1};
            ${
              animated
                ? `transform:  ${loading ? 'scale(2.2)' : 'initial'}`
                : ''
            };
          `}
        >
          {children}
        </span>
        {loading ? (
          <Loader
            className={rawCss`
            ${loaderStyles}
            opacity: ${loading ? 1 : 0};
            transform: ${loading ? 'translate(-50%, -50%) scale(1)' : 'inital'};
        `}
          />
        ) : null}
      </button>
    )
  }
)

export function ConfirmButton({
  children,
  onClick,
  confirmMessage,
  ...props
}: ConfirmButtonProps) {
  const ref = useRef(null)
  const [isConfirming, setIsConfirming] = useState(false)
  useOnClickOutside(ref, () => setIsConfirming(false))

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (isConfirming) {
      if (onClick && typeof onClick === 'function') {
        onClick(e)
        setIsConfirming(false)
      }
    } else {
      setIsConfirming(true)
    }
  }

  return (
    <Button onClick={handleClick} {...props} ref={ref}>
      {isConfirming ? confirmMessage : children}
    </Button>
  )
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
  disabled?: boolean
  inverted?: boolean
  animated?: boolean
}

export type ConfirmButtonProps = ButtonProps & {
  confirmMessage?: string | React.ReactElement
}

export default Button

const hoverAndInvertedStyle = css`
  background-color: var(--au-inverted-bg, #fff);
  color: var(--au-inverted-color, var(--au-accent-color));
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const baseStyles = css`
  background-color: var(--au-accent-color, #2b294e);
  color: #fff;
`

const buttonStyles = css`
  position: relative;
  padding: 0.8em 1.2em 0.65em 1.2em;
  line-height: 1;
  border-radius: 2em;
  border-color: transparent;
  border-width: 2px;
  border-style: solid;
  cursor: pointer;
  overflow: hidden;
  transition: background-color 0.3s ease;
  font: inherit;

  ${baseStyles}

  &:disabled {
    pointer-events: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1) !important;
    background-color: rgba(255, 255, 255, 0.3) !important;
    color: rgba(43, 41, 78, 0.8) !important;
  }

  @media not (hover: none) {
    &:hover {
      ${hoverAndInvertedStyle}
    }
  }
`

const invertedStyles = css`
  ${hoverAndInvertedStyle}

  @media not (hover: none) {
    &:hover {
      ${baseStyles}
    }
  }
`

const contentStyles = css`
  position: relative;
  display: inline-block;
  transition: 0.3s ease all;
`

const loaderStyles = rawCss`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1.5em;
  height: 1.5em;
  transform: translate(-50%, -50%) scale(0.2);
  opacity: 0;
  transition: 0.3s ease all;
`

export const buttonCx = rawCss`${buttonStyles}`
export const buttonInvertedCx = rawCss`${invertedStyles}`
