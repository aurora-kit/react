/** @jsx jsx */
import { jsx } from '@emotion/react';

const EyeIcon: React.FC<EyeIconProps> = ({ crossed, ...props }) => {
  return (
    <svg viewBox="0 0 64 64" {...props}>
      <path d={crossed ? d.close : d.open} fill="currentColor" />
    </svg>
  );
};

export type EyeIconProps = {
  crossed?: boolean;
};

export default EyeIcon;

const d = {
  open:
    'M63.1 30.9C62.6 30.1 50 12.5 32 12.5S1.4 30.1.9 30.9L.1 32l.8 1.1c.5.8 13.1 18.4 31.1 18.4s30.6-17.6 31.1-18.4l.8-1.1zM32 43.5a12 12 0 1112-12 12 12 0 01-12 12z',
  close:
    'M63.4.6a2 2 0 00-2.8 0L45 16.1A30.5 30.5 0 0032 13C14 13.1 1.4 30.7.9 31.4l-.8 1.2.8 1.1a53 53 0 0013.7 12.9l-14 14a2 2 0 102.8 2.8l60-60a2 2 0 000-2.8zM20 32.1a12 12 0 0112-12 11.9 11.9 0 016.9 2.2L22.2 39a11.9 11.9 0 01-2.2-6.9zm32.1-11.7l-8.5 8.5a12 12 0 01-14.8 14.7l-6.7 6.7a29.4 29.4 0 009.9 1.8c18 0 30.6-17.6 31.1-18.4l.8-1.1-.8-1.1a53.3 53.3 0 00-11-11.1z',
};
