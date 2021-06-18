/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const Loader: React.FC<LoaderProps> = props => {
  return (
    <svg viewBox="0 0 50 50" css={loaderStyles} {...props}>
      <path
        fill="currentColor"
        d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
      >
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  )
}

export type LoaderProps = {}

export default Loader

const loaderStyles = css`
  position: absolute;
  right: 0.75em;
  top: calc(50% - 0.25em);
  width: 2em;
  height: 2em;
`
