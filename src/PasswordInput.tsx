/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { forwardRef, useState } from 'react'

import EyeIcon from './EyeIcon'
import Input, { InputProps } from './Input'

const PasswordInput = forwardRef<
  HTMLInputElement,
  InputProps & { defaultVisible?: boolean }
>((props, ref) => {
  const [showPassword, setShowPassword] = useState(props.defaultVisible)
  return (
    <Input type={showPassword ? 'text' : 'password'} ref={ref} {...props}>
      <button
        type="button"
        onClick={e => {
          e.preventDefault()
          setShowPassword(s => !s)
        }}
        css={buttonStyle}
        tabIndex={-1}
      >
        <EyeIcon crossed={showPassword} />
      </button>{' '}
    </Input>
  )
})

export default PasswordInput

export const buttonStyle = css`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(calc(-50% + 2px));
  padding: 0;
  border: 0;
  background-color: transparent;
  width: 20px;
  cursor: pointer;
  color: #bebebe;
  transition: color 0.3s;

  &::focus {
    color: #ff4d6f;
  }
  &:hover {
    color: #6e6e6f;
  }
`
