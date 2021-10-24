import { ReactNode } from 'react'
import { css } from '@emotion/react'

interface Props {
  children: ReactNode
  direction?: 'column' | 'row'
  gap: number
  wrap: boolean
  className?: string
}

export const Stack = ({ children, direction = 'column', gap, wrap, className }: Props): JSX.Element => {
  return (
    <div css={wrapper(direction, gap, wrap)} className={className}>
      {children}
    </div>
  )
}

const wrapper = (direction: Props['direction'], gap: Props['gap'], wrap: Props['wrap']) => css`
  display: flex;
  flex-direction: ${direction};
  flex-wrap: ${wrap && 'wrap'};
  gap: ${gap}px;
`
