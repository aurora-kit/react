/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { forwardRef, useState } from 'react';

import EyeIcon from './EyeIcon';
import Input, { InputProps } from './Input';

const PasswordInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Input type={showPassword ? 'text' : 'password'} ref={ref} {...props}>
      <button
        type="button"
        onClick={e => {
          e.preventDefault();
          setShowPassword(s => !s);
        }}
        css={buttonStyle}
      >
        <EyeIcon crossed={showPassword} />
      </button>{' '}
    </Input>
  );
});

export default PasswordInput;

export const buttonStyle = css`
  position: absolute;
  right: 15px;
  bottom: 10px;
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
`;
