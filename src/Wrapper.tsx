/** @jsx jsx */
import { PropsWithChildren } from 'react';
import { jsx } from '@emotion/react';
import { wrapperStyle, labelStyle } from './Input';

const Wrapper: React.FC<PropsWithChildren<WrapperProps>> = ({
  label,
  children,
  ...props
}) => {
  return (
    <label css={wrapperStyle} {...props}>
      <p css={labelStyle}>{label}</p>
      {children}
    </label>
  );
};

export type WrapperProps = {
  className?: string;
  label?: any;
};

export default Wrapper;
