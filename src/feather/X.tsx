import * as React from 'react'
import { IIconProps } from './index'

export const X: React.StatelessComponent<IIconProps> = ({
  borderSize,
  size,
  color,
  fill,
  strokeWidth,
  ...otherProps
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

X.defaultProps = {
  size: 24,
  color: 'currentColor',
  fill: false,
  strokeWidth: 2
}