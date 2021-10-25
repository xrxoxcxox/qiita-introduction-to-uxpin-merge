import styled from '@emotion/styled'
import { color } from '../../styles/tokens'

interface Props {
  children: string
  variant?: 'primary' | 'secondary' | 'disabled'
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'small' | 'time' | 'cite'
  className?: string
}

const TypographyRoot = styled('p')<Props>`
  color: ${(props) => props.variant && color.text[props.variant]};
  font-size: 1rem;
  font-weight: 400;
`

export const Typography = ({
  children = 'Typography',
  variant = 'primary',
  as = 'p',
  className
}: Props): JSX.Element => {
  return (
    <TypographyRoot variant={variant} as={as} className={className}>
      {children}
    </TypographyRoot>
  )
}
