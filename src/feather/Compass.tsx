import * as React from 'react'
import { IIconProps } from './index'

export const Compass: React.StatelessComponent<IIconProps> = ({
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
      {...otherProps}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={ strokeWidth }
      />
      <polygon
        points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={ strokeWidth }
      />
    </svg>
  )
}

Compass.defaultProps = {
  size: 24,
  color: 'currentColor',
  fill: false,
  strokeWidth: 2
}