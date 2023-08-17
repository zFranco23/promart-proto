import React from 'react'

interface ISvgIcon extends React.HTMLAttributes<HTMLDivElement> {
  iconSvg: string
}

export const SvgIcon = ({ iconSvg, ...props }: ISvgIcon): JSX.Element => (
  <i
    {...props}
    style={{
      mask: `no-repeat contain center url(${iconSvg})`,
      WebkitMaskImage: `url(${iconSvg})`,
      WebkitMaskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      WebkitMaskSize: 'contain',
      display: 'block'
    }}
  />
)
