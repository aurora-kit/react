/** @jsx jsx */
import { jsx } from '@emotion/react'
import { wrapperStyle, labelStyle } from './Input'

const Wrapper: React.FC<WrapperProps> = ({ label, children, ...props }) => {
  return (
    <label css={wrapperStyle} {...props}>
      <p css={labelStyle}>{label}</p>
      {children}
    </label>
  )
}

export type WrapperProps = {
  className?: string
  label?: string
}

export default Wrapper
