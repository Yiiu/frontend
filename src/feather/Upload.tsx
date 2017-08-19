
import * as React from 'react'
import { IIconProps } from './index'

export const Upload: React.StatelessComponent<IIconProps> = ({
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
      fill={ fill ? color : 'none' }
      stroke={ borderSize ? borderSize : color }
      strokeWidth={ strokeWidth }
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <polyline points="16 16 12 12 8 16" />
      <line x1="12" y1="12" x2="12" y2="21" />
      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
      <polyline points="16 16 12 12 8 16" />
    </svg>
  )
}

Upload.defaultProps = {
  size: 24,
  color: 'currentColor',
  fill: false,
  strokeWidth: 2
}