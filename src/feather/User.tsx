import * as React from 'react'
import { IIconProps } from './index'

export const User: React.StatelessComponent<IIconProps> = ({
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
      width={ size }
      height={ size }
      viewBox="0 0 24 24"
      { ...otherProps }
    >
      <path
        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
        fill="none"
        stroke={ color }
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={ strokeWidth }
      />
      <circle
        cx="12"
        cy="7"
        r="4"
        fill="none"
        stroke={ color }
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={ strokeWidth }
      />
    </svg>
  )
}

User.defaultProps = {
  size: 24,
  color: 'currentColor',
  fill: false,
  strokeWidth: 2
}