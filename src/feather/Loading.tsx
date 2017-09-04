
import * as React from 'react'
import { IIconProps } from './index'

export const Loading: React.StatelessComponent<IIconProps> = ({
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
      <path d="M12,2A10,10,0,0,1,22,12" />
    </svg>
  )
}

Loading.defaultProps = {
  size: 24,
  color: 'currentColor',
  fill: false,
  strokeWidth: 2
}